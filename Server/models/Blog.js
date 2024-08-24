//#user and blog, one-to-many
const mongoose = require("mongoose")
require("dotenv").config()

const blogSchema = new mongoose.Schema({
    title: {required: true, type: String},
    userName:{type: String, required:true} ,
    content: {type: String, required:true},
    upVotesCount: {type: Number, default: 0},
    downVotesCount: {type: Number, default: 0},
    commentsCount: {type: Number, default: 0},
    thumbnailUrl: {type: String}, //#TODO add this feature
    createdAt: {type: Date, default: Date.now },
})

const Blogs = mongoose.model("Blogs", blogSchema)

module.exports = Blogs