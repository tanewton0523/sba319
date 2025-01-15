const mongoose = require('mongoose');

const departmentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    head: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Department', departmentsSchema);