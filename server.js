import express from 'express';
import trachomaRoutes from './route/trachomaRoute.js';
import connectToDatabase from './config/db.js';

const app = express();
const PORT = process.env.PORT || 3000;

connectToDatabase();

// Middleware
app.use(express.json());

// Routes
app.use('/api', trachomaRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
