var express = require('express');
var router = express.Router();
var Review = require('../models/Review');
var Profile = require('../models/Profile');
var User = require('../models/User');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

// POST request to /reviews
router.post('/', function(request, response){
  // grab the text from the request body and save it as a new
  // review
  var reviewText = request.body.text;
  var review = new Review({text: reviewText});

  review.save();
  // get the id of the user that commented
  var userId = request.body.userId;
  // grab the book with that id and
  User.findById(userId, function(error, user){
    // get the mongoose id of the recently saved review
    var reviewId = review.id
    // push the review id in to the book review array
    user.reviews.push(reviewId);
    user.save();
    response.redirect(request.get('referer'));
  })
})

module.exports = router;