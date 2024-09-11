const express=require("express")
const app=express()
require("./config/db")
const bookRouter=require("./routes/booksRoutes")

app.use(express.json())
app.use("/api/v1",bookRouter)

app.listen(5000,(err)=>{
  if(!err){
    console.log("Server is running on port-http://localhost:5000")
  }
  else{
    console.log(err)
  }
})