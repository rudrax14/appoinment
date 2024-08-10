const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
    },
    message: {
        type: String,
        required: [true, 'Message is required'],
    },
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;