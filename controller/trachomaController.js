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
    res.status(200).json(trachomas);
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
    res.status(200).json(trachoma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
