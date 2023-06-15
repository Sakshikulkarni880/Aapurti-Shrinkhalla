// controllers/farmerController.js
const express = require('express');
const Farmer = require('../models/farmerModel');

// Controller methods for handling farmer-related operations

// Get all farmers
exports.getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching farmers' });
  }
};

// Get a single farmer by ID
exports.getFarmerById = async (req, res) => {
  try {
    const farmer = await Farmer.findById(req.params.id);
    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }
    res.status(200).json(farmer);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the farmer' });
  }
};

// Create a new farmer
// exports.createFarmer = async (req, res) => {
//   console.log(req.body); // Log the value of req.body to the console
//   const { name, emailId, password, location, contactNumber, farmOwnershipDocument, farmSize, crops, profilePicture, dateOfBirth } = req.body;

//   try {
//     const farmer = new Farmer({
//       name,
//       emailId,
//       password,
//       location,
//       contactNumber,
//       farmOwnershipDocument,
//       farmSize,
//       crops,
//         profilePicture,
//       dateOfBirth,
//     });

//     await farmer.save();
//     res.status(201).json({ message: 'Farmer created successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'An error occurred while creating the farmer' });
//   }
// };

exports.createFarmer = async (req, res) => {
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
    console.log(error); // Add this line to log the error
    res.status(500).json({ error: 'An error occurred while creating the farmer' });
  }
};


// Update an existing farmer
exports.updateFarmer = async (req, res) => {
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
};

// Delete a farmer
exports.deleteFarmer = async (req, res) => {
  try {
    const farmer = await Farmer.findByIdAndRemove(req.params.id);

    if (!farmer) {
      return res.status(404).json({ error: 'Farmer not found' });
    }

    res.status(200).json({ message: 'Farmer deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while deleting the farmer' });
  }
};
