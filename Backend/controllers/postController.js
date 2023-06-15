// controllers/postsController.js
const express = require('express');
const Post = require('../models/postModel'); // Import the Post model

// Controller functions for post-related routes
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); // Retrieve all posts from the database
    res.json(posts); // Return the posts as a JSON response
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching posts' });
  }
};

// Get a single post by ID
const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.status(200).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while fetching the Post' });
  }
};

const createPost = async (req, res) => {
  try {
    const { title, content, createdBy } = req.body; // Extract the title and content from the request body
    const newPost = new Post({ title, content, createdBy }); // Create a new post document
    const savedPost = await newPost.save(); // Save the new post to the database
    res.status(201).json(savedPost); // Return the saved post as a JSON response
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'An error occurred while creating the post' });
  }
};

// Update an existing post
const updatePost = async (req, res) => {
  const { title, content, createdBy } = req.body;

  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      { title, content, createdBy },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json({ message: 'Post updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the Post' });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndRemove(req.params.id);

    if (!post) {
      return res.status(404).json({ error: 'post not found' });
    }

    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the post' });
  }
};


// Export the controller functions
module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
