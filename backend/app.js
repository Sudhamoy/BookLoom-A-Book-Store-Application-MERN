const express=require("express")
const app=express()
require("./config/db")

app.get("/",(req,res)=>{
  res.send("Hello World")
})
/* app.get("/services",(req,res)=>{
  res.send("Service Page")
}) */

app.listen(5000,(err)=>{
  if(!err){
    console.log("Server is running on port-http://localhost:5000")
  }
  else{
    console.log(err)
  }
})