var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  email: String,
  password: String, 
  name: String,
  title: String,
  company: String
});

module.exports = mongoose.model('User', UserSchema);
