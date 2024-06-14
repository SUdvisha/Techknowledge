const exp=require('express');
const authorApp=exp.Router();
const bcryptjs=require('bcryptjs')
const expressAsyncHandler=require('express-async-handler')
const jwt=require('jsonwebtoken')
const verifyToken=require('../Middlewares/verifyToken')
require('dotenv').config()
let authorcollection;
let articlecollection;
//get authorcollection App
authorApp.use((req,res,next)=>{
    authorcollection=req.app.get('authorcollection');
    articlecollection=req.app.get('articlecollection')
    next()
})
//author registration router
authorApp.post('/author',expressAsyncHandler(async(req,res)=>{
    //get user resource from client
    const newAuthor=req.body;
    //checking duplicate user with username
    const dbauthor=await authorcollection.findOne({username:newAuthor.username})
    if(dbauthor!==null){
        res.send({message:"author existed"})
    }else{
        //hash password
        //replace with plain password
        //create user
        const hashedPassword=await bcryptjs.hash(newAuthor.password,6)
        newAuthor.password=hashedPassword;
        await authorcollection.insertOne(newAuthor)
        res.send({message:"author created"})
    }
}))
authorApp.post('/login',expressAsyncHandler(async(req,res)=>{
    //get cred obj from client
    const userCred=req.body;
    //check for username
    const dbuser=await authorcollection.findOne({username:userCred.username})
    if(dbuser===null){
        res.send({message:"Invalid username"})
    }else{
        //check for password
       const status=await bcryptjs.compare(userCred.password,dbuser.password)
       if(status===false){
        res.send({message:"Invalid password"})
       }else{
    //create jwt token and encode it
        const signedToken=jwt.sign({username:dbuser.username},process.env.SECRET_KEY,{expiresIn:'1d'})
    //send res
        res.send({message:"Login success",token:signedToken,user:dbuser})
       }
    }
}))
authorApp.post('/add-article',verifyToken,expressAsyncHandler(async(req,res)=>{
    //get new article from client
    const newArticle=req.body;
    console.log(newArticle)
    //post to artciles collection
    await articlecollection.insertOne(newArticle)
    //send res
    res.send({message:"New article created"})
}))
authorApp.get('/articles/:username',verifyToken,expressAsyncHandler(async(req,res)=>{
    //get author's username from url
    const authorName=req.params.username;
    //get atricles whose status is true
    const articlesList=await articlecollection.find({status:true,username:authorName}).toArray()
    res.send({message:"List of articles",payload:articlesList})

}))
authorApp.get('/article',verifyToken,expressAsyncHandler(async(req,res)=>{
    const articlecollection=req.app.get('articlecollection')
    //get all articles
    let articlesList=await articlecollection.find({status:true}).toArray()
    res.send({message:"articles",payload:articlesList})

}))
authorApp.put('/articlem',verifyToken,expressAsyncHandler(async(req,res)=>{
    //get modified article from client
    const modifiedArticle=req.body;
    //update by article id
   let result= await articlecollection.updateOne({articleId:modifiedArticle.articleId},{$set:{...modifiedArticle}})
    res.send({message:"Article modified"})
}))
//delete an article by article ID
authorApp.put('/article/:articleId',verifyToken,expressAsyncHandler(async(req,res)=>{
    //get articleId from url
    const artileIdFromUrl=req.params.articleId;
    //get article 
    const articleToDelete=req.body;
    //update status of article to false
    await articlecollection.updateOne({articleId:artileIdFromUrl},{$set:{...articleToDelete,status:false}})
    res.send({message:"Article removed"})
}))

module.exports=authorApp



















  
module.exports=authorApp