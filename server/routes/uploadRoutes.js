// server/routes/uploadRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const router = express.Router();

// Define the uploads directory path
const uploadDir = path.join(__dirname, "..", "public", "uploads");

// Create the directory if it doesn't exist
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage: Files will be saved to 'public/uploads'
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Create a unique filename using timestamp and original name.
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

// POST /api/upload - Endpoint to upload an image file
// router.post("/", upload.single("imgUrl"), (req, res) => {
//   try {
//     // Build the public URL for the uploaded file.
//     // Assuming static files are served from "public".
//     const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
//     res.status(201).json({ imgUrl: fileUrl });
//   } catch (error) {
//     console.error("Upload error:", error);
//     res.status(500).json({ error: "Image upload failed" });
//   }
// });

module.exports = router;
