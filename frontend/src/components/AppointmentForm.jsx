import axios from 'axios';
import React, { useState } from 'react';

const AppointmentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/appointments', formData).then((response) => {
            console.log('Form submitted:', response);
            alert('Your appointment has been booked successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
            });
        }).catch((error) => {
            console.error('Error submitting the form:', error);
            alert(error.response.data.message);
        });
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-8 shadow-lg">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder='Enter your name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    placeholder='Enter your email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Phone</label>
                <input
                    type="text"
                    name="phone"
                    placeholder='Enter your phone number'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                />
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2">Message</label>
                <textarea
                    name="message"
                    placeholder='Enter your message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded"
                ></textarea>
            </div>
            <button type="submit" className="bg-orange-500 text-white px-4 py-2 w-full rounded">
                Book an Appointment
            </button>
        </form>
    );
};

export default AppointmentForm;
