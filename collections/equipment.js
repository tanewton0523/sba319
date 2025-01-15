const mongoose = require('mongoose');

const equipmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: yes
    },
    type: {
        type: String,
        requred: yes
    },
    condition: {
        type: String,
        required: yes
    },
    location: {
        type: String,
        required: yes
    },
    lastChecked: {
        type: Date,
        required: yes
    }
});

module.exports = mongoose.model('Equipment', equipmentSchema);