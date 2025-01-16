const mongoose = require('mongoose');
const Department = require('../collections/departments');
const Equipment = require('../collections/equipment')
const MaintenanceRecords = require('../collections/maintenanceRecords');

async function seedDatabase() {
    try {
        await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        await departments.deleteMany({});
        await equipment.deleteMany({});
        await maintenanceRecords.deleteMany({});
    
        const createdDepartments = await Department.    insertMany(departmentsData);
        console.log("Departments added:", createdDepartments);
  
        const createdEquipment = await Equipment.insertMany(equipmentData);
        console.log("Equipment added:", createdEquipment);
  
        maintenanceRecordsData[0].equipmentID = createdEquipment[0]._id; // Link equipment
        const createdMaintenanceRecords = await MaintenanceRecords.insertMany(maintenanceRecordsData);
        console.log("Maintenance record added:", createdMaintenanceRecords);
  
        mongoose.connection.close();
        console.log('Seeding complete and connection closed');
    } catch (err) {
    console.error('Seeding failed:', err.message);
    }
};

seedDatabase().catch(err => console.log(err));