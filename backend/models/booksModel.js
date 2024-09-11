const mongoose=require("mongoose")
const { Schema } = mongoose;
const bookSchema = new Schema({
  bookname:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  author:{
    type:String,
    required:true
  },
  image:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  }
})
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;