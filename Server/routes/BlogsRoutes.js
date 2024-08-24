const express = require("express") 
const router = express.Router();
const Blogs = require("../models/Blog");

//read
router.get("/", async (req,res) => {
    try {
        const blogs = await Blogs.find({}).sort({createdAt: -1})
        res.send({blogs}) 
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send({ Error: e.message})
    }
})

//read specific
router.get("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const blogs = await Blogs.find({_id: id})
        if (blogs){
            res.send({blogs})
        }
        else {
            res.status(404).json({message: "Blog not found !"})
        }
         
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send({ Error: e.message})
    }
})

//create
router.post("/create", async (req,res) => {
    const {title, content, userName} = req.body
    console.log(req.body)
    try {
        const blog = await Blogs.create({title, content, userName })
       console.log(blog, "blog")
       res.json({message: "Successfully created", postId: blog._id})
         
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send({ Error: e.message})
    }
})

//update
router.put("/:id", async (req,res) => {
    const {id} = req.params
    const updatedAt =  Date.now()
    try {
        const blog = await Blogs.updateOne({_id: id}, {$set: {...req.body,updatedAt} })

        if(!blog) return res.status(404).json({error: "Blog not Found"})
        res.json({message: "Successfully Updated",blog})
         
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send({ Error: e.message})
    }
})

//delete
router.delete("/:id", async (req,res) => {
    const {id} = req.params
    try {
        const blog = await Blogs.deleteOne({_id: id})

        if(!blog) return res.status(404).json({error: "Blog not Found"})
        res.json({message: "Successfully deleted",blog})
         
    } catch(e) {
        console.log("Error", e.message)
        res.status(500).send({ Error: e.message})
    }
})



module.exports = router