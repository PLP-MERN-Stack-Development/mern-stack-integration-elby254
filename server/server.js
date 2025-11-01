import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import noteRoutes from "./routes/noteRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";

dotenv.config();

// Initialize express first
const app = express();

// Middleware
app.use(cors({
  origin: process.env.ALLOWED_ORIGIN,
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());

// Routes
app.use("/api/notes", noteRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/categories", categoryRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("MERN Blog API is running");
});

// Connect MongoDB and start server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => console.error("❌ MongoDB connection failed:", err));


