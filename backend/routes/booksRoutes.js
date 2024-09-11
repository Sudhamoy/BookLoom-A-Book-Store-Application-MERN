const router=require("express").Router()
const bookModel=require("../models/booksModel")

//POST REQUEST:
router.post("/add", async(req,res)=>{
  try{
    const data=req.body
    const newBook=new bookModel(data)
    newBook.save().then(()=>{
      res.status(200).json({message: "Book added successfully"})
    })
  }catch(err){
    res.status(500).send({message:err.message})
    console.log(err)
  }
})

//GET REQUEST:
router.get("/getBooks", async(req,res)=>{
  try{
    const book=await bookModel.find()//fetch books
    res.status(200).json(book)
  }catch(err){
    res.status(500).send({message:err.message})
    console.log(err)
  }
})

//GET REQUEST WITH ID:
router.get("/getBooks/:id", async(req,res)=>{
  try{
    const id=req.params.id
    const book=await bookModel.findById(id)//fetch book by id
    res.status(200).json({book})
  }catch(err){
    res.status(500).send({message:err.message})
    console.log(err)
  }
})

//UPDATE BOOK BY ID:
router.put("/updateBooks/:id",async(req,res)=>{
  const id=req.params.id
  const {bookname, description, author, image, price}=req.body
  try{
    const book=await bookModel.findByIdAndUpdate(id,{bookname, description, author, image, price})
    await book.save().then(()=>{
      //res.json({book})
      res.status(200).json({message: "Book updated successfully"})
    })
  }catch(err){
    res.status(500).send({message:err.message})
    console.log(err)
  }
})

//DELETE BOOK BY ID:
router.delete("/deleteBooks/:id",async(req,res)=>{
  const id=req.params.id
  try{
    await bookModel.findByIdAndDelete(id).then(()=>{
      res.status(200).json({message: "Book deleted successfully"})
    })
  }catch(err){
    res.status(500).send({message:err.message})
    console.log(err)
  }
})

module.exports=router