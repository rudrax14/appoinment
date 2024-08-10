const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect('mongodb://localhost:27017/appointments')
        console.log(`MongoDB connected !! to ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1) // Exit process with failure
    }
}

module.exports = connectDB