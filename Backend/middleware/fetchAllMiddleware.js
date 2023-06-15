const express = require('express');
const router = express.Router();
const Farmer = require('../models/Farmer');
const User = require('../models/User');
const Post = require('../models/Post');

// Middleware function to log farmer requests
const logFarmerRequests = (req, res, next) => {
  console.log(`Incoming farmer request: ${req.method} ${req.url}`);
  next();
};

// Get all farmers
router.get('/', logFarmerRequests, async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching farmers' });
  }
});

// Get a single farmer by ID
router.get('/:id', logFarmerRequests, async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the farmer' });
  }
});

// Create a new farmer
router.post('/', logFarmerRequests, async (req, res) => {
  console.log(req.body);
  const { name, emailId, password, location, contactNumber, farmOwnershipDocument, farmSize, crops, profilePicture, dateOfBirth } = req.body;
  try {
    const farmer = new Farmer({
      name,
      emailId,
      password,
      location,
      contactNumber,
      farmOwnershipDocument,
      farmSize,
      crops,
      profilePicture,
      dateOfBirth,
    });

    await farmer.save();
    res.status(201).json({ message: 'Farmer created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the farmer' });
  }
});

// Update an existing farmer
router.put('/:id', logFarmerRequests, async (req, res) => {
  const { name, emailId, location, contactNumber, farmOwnershipDocument, farmSize, crops, profilePicture } = req.body;

  try {
    const farmer = await Farmer.findByIdAndUpdate(
      req.params.id,
      { name, emailId, location, contactNumber, farmOwnershipDocument, farmSize, crops, profilePicture },
      { new: true }
    );

    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }

    res.status(200).json({ message: 'Farmer updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating the farmer' });
  }
});

// Delete a farmer
router.delete('/:id', logFarmerRequests, async (req, res) => {
  try {
    const farmer = await Farmer.findByIdAndRemove(req.params.id);

    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }

    res.status(200).json({ message: 'Farmer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the farmer' });
  }
});

//************************************************/
// Middleware function to log user requests

const logUserRequests = (req, res, next) => {
  console.log(`Incoming user request: ${req.method} ${req.url}`);
  next();
};

// Get all users
router.get('/', logUserRequests, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching users' });
  }
});

// Get a single user by ID
router.get('/:id', logUserRequests, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the user' });
  }
});

// Create a new user
router.post('/', logUserRequests, async (req, res) => {
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
});

// Update an existing user
router.put('/:id', logUserRequests, async (req, res) => {
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
});

// Delete a user
router.delete('/:id', logUserRequests, async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the user' });
  }
});


//*************************************************************/

// Middleware function to log post requests
const logPostRequests = (req, res, next) => {
  console.log(`Incoming post request: ${req.method} ${req.url}`);
  next();
};

// Get all posts
router.get('/', logPostRequests, (req, res) => {
  res.send('This is the posts route');
});

// Create a new post
router.post('/', logPostRequests, (req, res) => {
  res.send('Create a new post');
});

// Update a post by ID
router.put('/:id', logPostRequests, (req, res) => {
  res.send(`Update post with ID ${req.params.id}`);
});

// Delete a post by ID
router.delete('/:id', logPostRequests, (req, res) => {
  res.send(`Delete post with ID ${req.params.id}`);
});


module.exports = router;
