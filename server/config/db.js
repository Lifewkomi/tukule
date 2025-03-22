// server/config/db.js

// Load environment variables from .env file
require("dotenv").config();

const mongoose = require("mongoose");

// Retrieve the MongoDB URI from environment variables
const mongoURI = process.env.MONGO_URI;

// Function to connect to the database
const connectDB = async () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("MongoDB connected successfully"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = connectDB;
