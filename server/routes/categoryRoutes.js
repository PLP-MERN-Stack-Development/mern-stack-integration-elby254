// categoryRoutes.js - Express routes for handling category-related API requests

const express = require('express');
const Category = require('../models/category');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    // Fetch all categories from the database
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Server error while fetching categories' });
  }
});


router.post('/', async (req, res) => {
  try {
    // Create a new category using request body
    const newCategory = new Category(req.body);
    await newCategory.save();

    res.status(201).json(newCategory);
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(400).json({ message: 'Error creating category', error: error.message });
  }
});

module.exports = router;
