const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, default: '' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Note', noteSchema);
