// postRoutes.js - Express routes for handling blog post API requests

const express = require('express');
const Post = require('../models/post');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    // Retrieve all posts and populate the category and author references
    const posts = await Post.find().populate('category').populate('author');
    res.status(200).json(posts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    res.status(500).json({ message: 'Server error while fetching posts' });
  }
});


router.get('/:id', async (req, res) => {
  try {
    // Find post by its ID
    const post = await Post.findById(req.params.id).populate('category').populate('author');

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(post);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(500).json({ message: 'Server error while fetching post' });
  }
});


router.post('/', async (req, res) => {
  try {
    // Create a new post document using data from the request body
    const newPost = new Post(req.body);
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(400).json({ message: 'Error creating post', error: error.message });
  }
});


router.put('/:id', async (req, res) => {
  try {
    // Find post by ID and update with new data
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
    });

    if (!updatedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(400).json({ message: 'Error updating post', error: error.message });
  }
});


router.delete('/:id', async (req, res) => {
  try {
    // Find and delete post by ID
    const deletedPost = await Post.findByIdAndDelete(req.params.id);

    if (!deletedPost) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ message: 'Server error while deleting post' });
  }
});

module.exports = router;

