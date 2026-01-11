console.log("🔥 userRoutes LOADED");

const express = require('express');
const { getProfile, updateProfile } = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();

// 🔴 ADD THIS TEST ROUTE
router.get('/test', (req, res) => {
  res.send("USER ROUTE WORKING");
});

router.get('/profile', protect, getProfile);
router.put('/profile', protect, updateProfile);

module.exports = router;
