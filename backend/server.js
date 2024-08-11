const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const appointmentRoutes = require('./routes/appointment');  // Updated to match your file name
app.use('/api', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Appointment Booking API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
