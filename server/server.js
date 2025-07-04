// server/server.js

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const postRoutes = require("./routes/postRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// --- START: Corrected Manual CORS Middleware ---
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);

  // --- THIS IS THE CRITICAL FIX ---
  // Intercepts the OPTIONS method (the "preflight" request)
  if (req.method === 'OPTIONS') {
    // Responds with a 200 'OK' and ends the request-response cycle.
    return res.sendStatus(200);
  }
  // --- END OF FIX ---

  // For all other requests, move on to the next middleware.
  next();
});
// --- END: Corrected Manual CORS Middleware ---

// Middleware to read JSON body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use("/api/posts", postRoutes);

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, '0.0.0.0', () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
  });