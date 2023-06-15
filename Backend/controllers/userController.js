// controllers/userController.js

const User = require('../models/userModel');

// Controller methods for handling user-related operations

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
};

// Get a single user by ID
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
};

// Create a new user
exports.createUser = async (req, res) => {
  const { name, email, password, contactNumber, profilePicture, dateOfBirth } = req.body;

  try {
    const user = new User({
      name,
      email,
      password,
      contactNumber,
      profilePicture,
      dateOfBirth,
    });

    await user.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the user' });
  }
};

// Update an existing user
exports.updateUser = async (req, res) => {
  const { name, email, role, contactNumber, profilePicture, dateOfBirth } = req.body;

  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      { name, email, role, contactNumber, profilePicture, dateOfBirth },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the user' });
  }
};

// Delete a user
exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
};
