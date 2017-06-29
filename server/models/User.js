var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String, 
  name: String,
  age: String,
  profession: String
});

module.exports = mongoose.model('User', UserSchema);
