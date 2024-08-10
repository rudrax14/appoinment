const express = require('express');
const cors = require('cors');
const Appointment = require('./models/appoinment.model');
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());


// Default route
app.get("/", (req, res) => {
  console.log("Hello, this is the appoinment-backend");
  res.send("Hello, this is the appoinment-backend");
});

app.post('/api/appointments', async (req, res) => {

  try {

    const existingAppointment = await Appointment.findOne({ email: req.body.email });
    if (existingAppointment) {
      return res.status(400).json({ message: 'Appointment with this email already exists' });
    }

    // Create and save the new appointment
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.error('Error saving appointment:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  try {
    const results = await Appointment.find({ name: new RegExp(query, 'i') }, 'name email');
    res.json(results);
  } catch (error) {
    res.status(500).send("Error searching for appointments");
  }
});


module.exports = app;