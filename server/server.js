// server/server.js

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); // Quay lại dùng thư viện cors
require("dotenv").config();

const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Cấu hình cors đơn giản nhất
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/posts", postRoutes);

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // Không cần '0.0.0.0' nữa
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });