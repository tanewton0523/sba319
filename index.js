const connectDB = require('./config/db');
const departmentsRoutes = require('./routes/departmentsRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const maintenanceRecordsRoutes = require('./routes/maintenanceRecordsRoutes');

require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

connectDB();

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page')
})

app.use('/api/departmentsRoutes', departmentsRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenanceRecordsRoutes', maintenanceRecordsRoutes);
