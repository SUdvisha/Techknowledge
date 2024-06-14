const exp=require('express');
const userApp=exp.Router();
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const verifyToken=require('../Middlewares/verifyToken')
require('dotenv').config()
let usercollection;
//get usercollection App 
let articlecollection;
userApp.use((req,res,next)=>{
    usercollection=req.app.get('usercollection');
    articlecollection = req.app.get("articlecollection");
    next()
});

userApp.post('/user',expressAsyncHandler(async(req,res)=>{
    //get user resource from client
    const newUser=req.body;
    //checking duplicate user with username
    const dbuser=await usercollection.findOne({username:newUser.username})
    if(dbuser!==null){
        res.send({message:"user existed"})
    }else{
        //hash password
        //replace with plain password
        //create user
        const hashedPassword=await bcryptjs.hash(newUser.password,6)
        newUser.password=hashedPassword;
        await usercollection.insertOne(newUser)
        res.send({message:"user created"})
    }
}))
userApp.post('/login',expressAsyncHandler(async(req,res)=>{
    const userCred=req.body;
    //check for user
    //check for password
    //create jwt
    //send res
    const dbuser=await usercollection.findOne({username:userCred.username})
    if(dbuser===null){
        res.send({message:"Invalid username"})
    }else{
        const status=await bcryptjs.compare(userCred.password,dbuser.password)
        if(status===false){
            res.send({message:"Invalid password"})
        }else{
            const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:'1d'})
            res.send({message:"Login success",token:signedToken,user:dbuser})


        }

    }
}))
userApp.get(
    "/articles",verifyToken,
    expressAsyncHandler(async (req, res) => {
      //get articlescollection from express app
      const articlecollection = req.app.get("articlecollection");
      //get all articles
      let articleList = await articlecollection
        .find({ status: true })
        .toArray();
      //send res
      res.send({ message: "articles", payload: articleList });
    })
  );
  
  //post comments for an arcicle by atricle id
  userApp.post(
    "/comment/:articleId",verifyToken,
    expressAsyncHandler(async (req, res) => {
      //get user comment obj
      const userComment = req.body;
      const articleIdFromUrl=(+req.params.articleId);
      //insert userComment object to comments array of article by id
      let result = await articlecollection.updateOne(
        { articleId: articleIdFromUrl},
        { $addToSet: { comments: userComment } }
      );
      console.log(result);
      res.send({ message: "Comment posted" });
    })
  );
  userApp.get(
    "/article",verifyToken,
    expressAsyncHandler(async (req, res) => {
      //get articlescollection from express app
      const articlecollection = req.app.get("articlecollection");
      //get all articles
      let articlesList = await articlecollection
        .find({ status: true })
        .toArray();
      //send res
      res.send({ message: "articles", payload: articlesList });
    })
  );
module.exports=userApp