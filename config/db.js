const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI,);
        console.log('Welcome, MongoDB is now connected!!');
    } catch (error) {
        console.error('Oh no! The database connection failed:', error.message);
        process.exit(1);
    }
}
module.exports = connectDB;