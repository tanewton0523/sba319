const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true,
        // enum: 
    },
    location: {
        type: String,
        required: true
    },
    lastChecked: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Equipment', equipmentSchema);