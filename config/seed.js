const mongoose = require('mongoose');
const departments = require('../collections/departments');
const equipment = require('../collections/equipment')
const maintenanceRecords = require('../collections/maintenanceRecords');

async function seedDatabase() {
    await mongoose.connect('cluster0-shard-00-00.skdmn.mongodb.net:27017', { useNewUrlParser: true, useUnifiedTopology: true });

    await departments.deleteMany({});
    await equipment.deleteMany({});
    await maintenanceRecords.deleteMany({});
    
}