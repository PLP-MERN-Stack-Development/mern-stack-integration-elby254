// routes/noteRoutes.js
const express = require('express');
const Note = require('../models/noteModel');

const router = express.Router();

// Get all notes
router.get('/', async (req, res) => {
  try {
    const { userId } = req.query;
    const notes = await Note.find(userId ? { userId } : {});
    res.json(notes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a note
router.post('/', async (req, res) => {
  try {
    const note = await Note.create(req.body);
    res.status(201).json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a note
router.put('/:id', async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(note);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a note
router.delete('/:id', async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json({ message: 'Note deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
