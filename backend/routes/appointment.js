const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');  // Updated path

// Create a new appointment
router.post('/book', async (req, res) => {
  const { name, email, phoneNumber, date, time, service, concern } = req.body;
  const appointment = new Appointment({
    name,
    email,
    phoneNumber,
    date,
    time,
    service,
    concern
  });

  try {
    const newAppointment = await appointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a single appointment by ID
router.get('/appointments/:id', async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an appointment by ID
router.put('/appointments/:id', async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json(updatedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an appointment by ID
router.delete('/appointments/:id', async (req, res) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
    if (!deletedAppointment) {
      return res.status(404).json({ message: 'Appointment not found' });
    }
    res.json({ message: 'Appointment deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Search appointments
router.get('/search', async (req, res) => {
  try {
    const { query } = req.query;
    const appointments = await Appointment.find({
      $or: [
        { name: { $regex: query, $options: 'i' } },
        { email: { $regex: query, $options: 'i' } },
        { service: { $regex: query, $options: 'i' } }
      ]
    });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
