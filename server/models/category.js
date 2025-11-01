// category.js - Mongoose model for blog categories

const mongoose = require('mongoose');

// Define the Category schema
const CategorySchema = new mongoose.Schema(
  {
    // Category name
    name: {
      type: String,
      required: [true, 'Please provide a category name'],
      unique: true, // Each category name should be unique
      trim: true,
      maxlength: [50, 'Category name cannot be more than 50 characters'],
    },

    // Optional description of the category
    description: {
      type: String,
      maxlength: [200, 'Description cannot be more than 200 characters'],
    },

    // Slug for clean URLs (generated from name)
    slug: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true } // Automatically adds createdAt and updatedAt fields
);

// Middleware: Create slug from name before saving
CategorySchema.pre('save', function (next) {
  if (!this.isModified('name')) {
    return next();
  }

  this.slug = this.name
    .toLowerCase()
    .replace(/[^\w ]+/g, '') // Remove special characters
    .replace(/ +/g, '-'); // Replace spaces with dashes

  next();
});

// Virtual for category URL
CategorySchema.virtual('url').get(function () {
  return `/categories/${this.slug}`;
});

// Export the Category model
module.exports = mongoose.model('Category', CategorySchema);
