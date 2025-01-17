const mongoose = require('mongoose');

const maintenanceRecordsSchema = new mongoose.Schema({
    equipmentID: {
        type: mongoose.Schema.Types.ObjectID,
        ref: 'Equipment',
        required: true,
        index: true
    },
    action: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    performedBy: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('MaintenanceRecords', maintenanceRecordsSchema);