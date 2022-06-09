const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  _id: String,
  name: String,
  age: Number
});

module.exports = mongoose.model('User', userSchema)