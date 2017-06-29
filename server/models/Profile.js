var mongoose = require('mongoose');

var ProfileSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  age: Number,
  profession: String,
  comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]//ref is the collection the database looks in
});

var profileModel = mongoose.model('Profile', ProfileSchema);

module.exports = profileModel;