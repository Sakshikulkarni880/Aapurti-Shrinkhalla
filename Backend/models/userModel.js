const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String
  },
  profilePicture: {
    type: String
  },
  dateOfBirth: {
    type: Date
  },
  // ... Add more fields as per your requirements
});

const User = mongoose.model('User', userSchema);

module.exports = User;
