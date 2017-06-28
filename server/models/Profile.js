var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  age: Number,
  profession: String
  // reviews: [{type: mongoose.Schema.Types.ObjectId, ref: 'Review'}]
});

var profileModel = mongoose.model('Profile', ProfileSchema);

module.exports = profileModel;