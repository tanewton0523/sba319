const express = require('express');
const router = express.Router();
const Department = require('../collections/departments');

// GET all departments
router.get('/', async (req, res, next) => {
    try {
        const departments = await Department.find();
        res.status(200).json(departments);
    } catch (err) {
        next(err);
    }
});

// POST: Create a new department
router.post('/', async (req, res, next) => {
    try {
        const newDepartment = await Department.create(req.body);
        res.status(201).json(newDepartment);
    } catch (err) {
        next(err);
    }
});

// PUT: Update department by ID
router.put('/:id', async (req, res, next) => {
    try {
        const updatedDepartment = await Department.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDepartment) return res.status(404).json({ message: 'Department not found'});
        res.status(200).json(updatedDepartment);
    } catch (err) {
        next(err);
    }
});

// DELETE: Remove department by ID
router.delete('/:id', async (req, res, next) => {
    try {
      const deletedDepartment = await Department.findByIdAndDelete(req.params.id);
      if (!deletedDepartment) return res.status(404).json({ message: 'Department not found' });
      res.status(200).json({ message: 'Department deleted successfully' });
    } catch (err) {
      next(err);
    }
  });
  
  module.exports = router;
  