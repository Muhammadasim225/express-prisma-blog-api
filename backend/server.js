const express=require('express');
const router=require('./Routes/allRoutes')
const app=express();
const dotenv=require('dotenv').config()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port=process.env.PORT;
app.get('/',(req,res)=>{
    res.send("Hello World");
})
app.use('/user',router)
app.listen(port,()=>{
    console.log(`Port is listening on http://localhost:${port}`)
})