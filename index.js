const connectDB = require('./config/db'); // Connect db
const departmentsRoutes = require('./routes/departmentsRoutes'); // Connect department data routes
const equipmentRoutes = require('./routes/equipmentRoutes'); // Connect equipment data routes
const maintenanceRecordsRoutes = require('./routes/maintenanceRecordsRoutes'); // Connect maintenance records routes

require('dotenv').config(); // Loads environment variables from .env

const express = require('express'); // Imports Express from dependencies(package.json)
const app = express(); // Creates Express app
const port = process.env.PORT || 5500; // Sets the port from .env

// Start server
app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
});

// Database connection
connectDB();

// Home route
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page')
});

// Middleware
app.use(express.json());

// Routes
app.use('/api/departments', departmentsRoutes);
app.use('/api/equipment', equipmentRoutes);
app.use('/api/maintenanceRecords', maintenanceRecordsRoutes);

// 404 fallback route
app.use((req, res) => {
    res.status(404).json({ error: 'Endpoint is not found' });
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});
