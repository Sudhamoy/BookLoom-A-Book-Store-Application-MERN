const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://deysudhamoy00:SkFnGT8m1NEFB8Et@bookstore1.itru6.mongodb.net/?retryWrites=true&w=majority&appName=bookstore1").then(()=>{
  console.log("CONNECTED SUCCESSFULLY TO MONGODB DATABASE")
}).catch((err)=>{
  console.log(err)
})