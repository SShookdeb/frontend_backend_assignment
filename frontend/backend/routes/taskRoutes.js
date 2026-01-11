const express = require('express');
const {
  createTask,
  getTasks,
  updateTask,
  deleteTask
} = require('../controllers/taskController');

const protect = require('../middleware/authMiddleware');

const router = express.Router();

// Protect all routes
router.post('/', protect, createTask);        // Create
router.get('/', protect, getTasks);           // Read
router.put('/:id', protect, updateTask);      // Update
router.delete('/:id', protect, deleteTask);   // Delete

module.exports = router;
