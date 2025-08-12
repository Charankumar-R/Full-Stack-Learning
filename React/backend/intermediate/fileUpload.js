// File upload example
// This file handles the uploading of files to the server
// It includes validation for file types and sizes
// Additionally, it provides feedback to the user upon successful or failed uploads

const express = require('express');
const multer = require('multer');
const path = require('path');

const router = express.Router();

// Set up storage engine for multer
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize upload variable
const upload = multer({
  storage,
  limits: { fileSize: 1000000 }, // Limit file size to 1MB
  fileFilter: (req, file, cb) => {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    }
    cb('Error: File upload only supports the following filetypes - ' + filetypes);
  },
}).single('myImage');

// @route   POST api/upload
// @desc    Uploads file to server
// @access  Public
router.post('/', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      return res.status(400).send({ message: err });
    }
    return res.status(200).send({ message: 'File uploaded successfully', file: `uploads/${req.file.filename}` });
  });
});

// Example file upload using multer
const uploadMulter = multer({ dest: 'uploads/' });

// Usage: app.post('/upload', upload.single('file'), (req, res) => {...})
module.exports = { router, uploadMulter };