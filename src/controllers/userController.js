'use strict';
const db = require('../models'); // Or const { User } = require('../models');
const User = db.User; // If using the whole db object

/**
 * Creates a new user.
 * @param {import('express').Request} req - The Express request object.
 * @param {import('express').Response} res - The Express response object.
 */
const createUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Basic validation
    if (!username || !email || !password) {
      return res.status(400).json({ error: 'Username, email, and password are required.' });
    }

    // TODO: Add more robust validation (e.g., password strength, email format if not handled by model)
    // TODO: Add password hashing here before saving to the database

    const newUser = await User.create({
      username,
      email,
      // password: hashedPassword, // Store hashed password instead of plain text
      password, // Storing plain text for now, will address hashing later if requested
    });

    // Don't send password back in the response
    const userResponse = {
      id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      createdAt: newUser.createdAt,
      updatedAt: newUser.updatedAt
    };

    res.status(201).json(userResponse);
  } catch (error) {
    // Handle Sequelize validation errors
    if (error.name === 'SequelizeValidationError') {
      const messages = error.errors.map(err => err.message);
      return res.status(400).json({ error: messages });
    }
    // Handle unique constraint errors (e.g., email already exists)
    if (error.name === 'SequelizeUniqueConstraintError') {
      const messages = error.errors.map(err => `${err.path} already exists.`); // err.path is the field
      return res.status(409).json({ error: messages }); // 409 Conflict
    }
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user.' });
  }
};

module.exports = {
  createUser,
};
