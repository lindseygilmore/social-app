var mongoose = require('mongoose');

//blueprint schema
var CommentSchema = new mongoose.Schema({
	name: String,
	text: String
});

var commentModel = mongoose.model('Comment', CommentSchema);

module.exports = commentModel;