const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogsSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
        required: true
    },
    bodyContent: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogsSchema);

module.exports = Blog;