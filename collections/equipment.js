const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        index: true
    },
    type: {
        type: String,
        required: true
    },
    condition: {
        type: String,
        required: true,
        enum: ['Good', 'Fair', 'Poor'] // Added enum for validation
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