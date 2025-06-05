'use strict';

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define user routes
// POST /api/users - Create a new user
router.post('/users', userController.createUser);

// Add other user routes here later (e.g., get user, update user, delete user)
// router.get('/users/:id', userController.getUserById);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;
