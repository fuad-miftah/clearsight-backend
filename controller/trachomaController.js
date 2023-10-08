import fs from 'fs';
import path from 'path';
import Trachoma from '../model/Trachoma.js';

// Create a new Trachoma record with file upload
export const createTrachoma = async (req, res) => {
  try {
    const { age, gender, symptom } = req.body;
    const image = req.file.filename; // Multer stores the uploaded file's information in req.file

    const trachoma = new Trachoma({ age, gender, symptom, image });
    const savedTrachoma = await trachoma.save();

    res.status(201).json(savedTrachoma);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all Trachoma records
export const getAllTrachomas = async (req, res) => {
    try {
      const trachomas = await Trachoma.find();
  
      // Map Trachoma records and read the image files
      const trachomasWithImages = await Promise.all(
        trachomas.map(async (trachoma) => {
          const imageFilePath = path.join('uploads', trachoma.image);
  
          // Read the image file as a buffer
          const imageBuffer = await fs.promises.readFile(imageFilePath);
  
          return {
            _id: trachoma._id,
            age: trachoma.age,
            gender: trachoma.gender,
            symptom: trachoma.symptom,
            image: imageBuffer.toString('base64'), // Convert the image buffer to a base64 string
          };
        })
      );
  
      res.status(200).json(trachomasWithImages);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

// Get a single Trachoma record by ID
export const getTrachoma = async (req, res) => {
    const { id } = req.params;
  
    try {
      const trachoma = await Trachoma.findById(id);
      if (!trachoma) {
        return res.status(404).json({ message: 'Trachoma not found' });
      }
  
      // Read the image file
      const imagePath = path.join('uploads/', trachoma.image);
      const image = fs.readFileSync(imagePath);
  
      // Send the Trachoma record along with the image as a base64 string
      res.status(200).json({
        _id: trachoma._id,
        age: trachoma.age,
        gender: trachoma.gender,
        symptom: trachoma.symptom,
        image: image.toString('base64'), // Convert the image buffer to a base64 string
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };



  export const deleteTrachoma = async (req, res) => {
    const { id } = req.params;
  
    try {
      const trachoma = await Trachoma.findById(id);
      if (!trachoma) {
        return res.status(404).json({ message: 'Trachoma not found' });
      }
  
      // Delete the image file from the file system
      const imageFilePath = path.join('uploads', trachoma.image);
      await fs.promises.unlink(imageFilePath);
  
      // Delete the Trachoma record from the database
      await Trachoma.findByIdAndDelete(id);
  
      res.status(204).end(); // Respond with a success status code
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };