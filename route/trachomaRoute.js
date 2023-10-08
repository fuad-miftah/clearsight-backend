import express from 'express';
import multer from 'multer';
import { createTrachoma, getAllTrachomas, getTrachoma } from '../controller/trachomaController.js';

const router = express.Router();

// Define storage for uploaded images
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the destination folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Set the filename to be unique
  },
});

const upload = multer({ storage });

// Create a new Trachoma record with file upload
router.post('/', upload.single('image'), createTrachoma);

// Get all Trachoma records
router.get('/', getAllTrachomas);

// Get a single Trachoma record by ID
router.get('/:id', getTrachoma);

export default router;
