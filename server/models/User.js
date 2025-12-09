// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: String, // Store hashed password!
});

module.exports = mongoose.model('User', UserSchema);