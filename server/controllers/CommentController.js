var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var Profile = require('../models/Profile');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(request, response){
	response.render('user-profile');
})

// POST request to /reviews
router.post('/', function(request, response){
  // grab the text from the request body and save it as a new
  // review
  var commentText = request.body.text;
  var comment = new Comment({text: commentText});
  // variable		//constructor
  comment.save();

/////////////////////////////////////////////
  // get the id of the user that commented
  profileId = request.body.profileId;
  console.log(request.body)
  response.send('ran');

/////////////////////////////////////////////
  Profile.findById(profileId, function(error, profile){

  	var comment = request.body.text;

  	profile.push(comment);

  	profile.save();

  })
  
    
});

module.exports = router;