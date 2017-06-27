var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var bodyParser = require('body-parser');
var session = require('express-session'); //WILL NOT DOWNLOAD

router.use(bodyParser.urlencoded({extended: true}));

//login info
router.get('/view', function(request, response){
	Comment.find(function(err, comment){
		var myComments = {allComments: comments}; //making an array so that the comments show up as an array
		if(request.session.loggedIn === true){
			response.render('comments', myComments);
		}else{
			response.redirect('/users/login');
		}
	})
})

//get all the comments
router.get('/', function(request, response){
	Comment.find(function(err, comment){
		response.json(comment);
	})
})

//send specific book by id
router.get('/:id', function(request, response){
	var id = request.params.id;
	Comment.find(function(err, comment){
		response.json(comment);
	})
})

//post
router.post('/', function(request, response){
	var comment = new Comment({ name: request.body.name,
		text: request.body.text

	});

	comment.save();
	response.json(comment);
})

// //patch
// router.patch('/:id', function(request, response){
// 	var id = request.params.id;
// 	Comment.findById(id, function(err, comment){
// 		comment.name = request.body.name,
// 		comment.text = request.body.text,

	
// })

// //delete
// router.delete('/:id', function(request, response){
// 	var id = request.params.id;
// 	Comment.findById(id, function(err, book){
// 		comment.remove();
// 		response.json('success');
// 	})
// })

//export the router to app.js
module.exports = router;








