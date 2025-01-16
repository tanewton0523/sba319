const express = require('express');
const router = express.Router();
const Equipment = require('../collections/equipment');

// GET all equipment
router.get('/', async (req, res, next) => {
    try {
        const equipment = await Equipment.find();
        res.status(200).json(equipment);
    } catch (err) {
        next(err);
    }
  });
  
  // POST: Create a new equipment
  router.post('/', async (req, res, next) => {
    try {
        const newEquipment = await Equipment.create(req.body);
        res.status(201).json(newEquipment);
    } catch (err) {
        next(err);
    }
  });
  
  // PUT: Update an equipment by ID
  router.put('/:id', async (req, res, next) => {
    try {
        const updatedEquipment = await Equipment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedEquipment) return res.status(404).json({ message: 'Equipment not found' });
        res.status(200).json(updatedEquipment);
    } catch (err) {
        next(err);
    }
  });
  
  // DELETE: Remove an equipment by ID
  router.delete('/:id', async (req, res, next) => {
    try {
        const deletedEquipment = await Equipment.findByIdAndDelete(req.params.id);
        if (!deletedEquipment) return res.status(404).json({ message: 'Equipment not found' });
        res.status(200).json({ message: 'Equipment deleted successfully' });
    } catch (err) {
        next(err);
    }
  });
  
  module.exports = router;
  