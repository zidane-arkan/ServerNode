const express = require('express');
const Blog = require('../models/blog');
const router = express.Router();
const { blog_index, blog_detail, blog_create_get, blog_create_post, blog_delete } = require('../controllers/blogController');

//Blog Routes
router.get('/', blog_index);

router.post('/', blog_create_post);

router.get('/create', blog_create_get);

router.get('/:id', blog_detail);

router.delete('/:id', blog_delete);



module.exports = router;