//create express app
const exp=require('express');
const app=exp()
const cors=require('cors')
require('dotenv').config()//process.env.PORT
const mongoClient=require('mongodb').MongoClient;
const path=require('path')
//deploy react build in this server
app.use(exp.static(path.join(__dirname,"../client/build")))
app.use(cors())
//to parse the body
app.use(exp.json())
mongoClient.connect(process.env.DB_URL)
.then(client=>{
    const tech=client.db('tech')
    const usercollection=tech.collection('usercollection');
    const articlecollection=tech.collection('articlecollection');
    const authorcollection=tech.collection('authorcollection');
    
    app.set('usercollection',usercollection)
    app.set('articlecollection',articlecollection)
    app.set('authorcollection',authorcollection)
    //confirm connection
    console.log("Db connection success");

})
.catch(err=>console.log("err in DB connection",err))

//if path start with user-api 
const userApp=require('./APIs/user-api');
const authorApp=require('./APIs/author-api');


app.use('/user-api',userApp)
app.use('/author-api',authorApp)

//deals with page refresh 
app.use((req,res,next)=>
    {
        res.sendFile(path.join(__dirname,'../client/build/index.html'))

    })


//express error handler
app.use((err,req,res,next)=>{
    res.send({message:"error",payload:err.message})
})



const port=process.env.PORT || 5000;
//assign port number
app.listen(port,()=>console.log(`web server on port ${port}`))