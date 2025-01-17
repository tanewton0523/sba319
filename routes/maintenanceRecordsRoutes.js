const express = require('express');
const router = express.Router();
const MaintenanceRecords = require('../collections/maintenanceRecords');
const Joi = require('joi'); // For input validation

// Validation schema
const maintenanceRecordSchema = Joi.object({
    equipmentID: Joi.string().required(),
    action: Joi.string().required(),
    date: Joi.date().required(),
    performedBy: Joi.string().required()
});

// GET all maintenance records
router.get('/', async (req, res, next) => {
    try {
        const maintenanceRecords = await MaintenanceRecords.find();
        res.status(200).json(maintenanceRecords);
    } catch (err) {
        next(err);
    }
  });
  
  // POST: Create a new maintenance record
  router.post('/', async (req, res, next) => {
    try {
        const newMaintenanceRecord = await MaintenanceRecords.create(req.body);
        res.status(201).json(newMaintenanceRecord);
    } catch (err) {
        next(err);
    }
  });
  
  // PUT: Update a maintenance record by ID
  router.put('/:id', async (req, res, next) => {
    try {
        const updatedMaintenanceRecord = await MaintenanceRecords.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMaintenanceRecord) return res.status(404).json({ message: 'Maintenance record not found' });
        res.status(200).json(updatedMaintenanceRecord);
    } catch (err) {
        next(err);
    }
  });
  
  // DELETE: Remove a maintenance record by ID
  router.delete('/:id', async (req, res, next) => {
    try {
        const deletedMaintenanceRecord = await MaintenanceRecords.findByIdAndDelete(req.params.id);
        if (!deletedMaintenanceRecord) return res.status(404).json({ message: 'Maintenance record not found' });
        res.status(200).json({ message: 'Maintenance record deleted successfully' });
    } catch (err) {
        next(err);
    }
  });
  
  module.exports = router;
  