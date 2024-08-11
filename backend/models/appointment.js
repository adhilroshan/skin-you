const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  concern: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Appointment', appointmentSchema);
