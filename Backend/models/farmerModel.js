const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  emailId: {
    type: String,
    required: true,
    unique: true
    },
  password: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
    },    
  farmOwnershipDocument: {
    type: String,
    required: true
  },
  farmSize: {
    type: Number
  },
  crops:[
    {
      name: {
        type: String,
        required: true
      },
      quantity: {
        type: Number
      }
    }
  ],
    profilePicture: {
    type: String
  },
  ratings: {
    type: Number,
    default: 0
  },
  reviews: [
    {
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      rating: Number,
      comment: String
    }
    ],
  dateOfBirth: {
    type: Date
  },
  // ... Add more fields as per your requirements
});

const Farmer = mongoose.model('Farmer', farmerSchema);

module.exports = Farmer;
