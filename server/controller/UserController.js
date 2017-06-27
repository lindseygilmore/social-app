
//works with login and register hbs pages
//note: render sends to a handlebars path, redirect sends to a url

var express = require('express');
var router = express.Router();
var User = require('../models/Comment'); //copy over code form CommentController and replace all Comments/comment with User
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

router.use(bodyParser.urlencoded({extended: true}));

//REGISTER
//when someone goes to users/register, it serves up the 'register' hbs
router.get('/register', function(request, response){
	response.render('register');
})

//LOGIN
//when someone goes to users/login, it serves up the 'login' hbs page
router.get('/login', function(request, response){
	response.render('login');
})


//get all the comments
router.get('/', function(request, response){
	User.find(function(err, user){
		response.json(user);
	})
})

//send specific book by id
router.get('/:id', function(request, response){
	var id = request.params.id;
	User.find(function(err, user){
		response.json(user);
	})
})

//REGISTER
//post aka create new login for new users
router.post('/register', function(request, response){
	//create a new user
	bcrypt.hash(request.body.password, 10, function(err, hash){ //10 represents "salt" -- a random set of characters that are sprinkled within the hash. 
		console.log(hash);
		var user = new User({
			email: request.body.email,
			password: hash
			})

		user.save();
		response.redirect('/profile');
	}) 
})

//LOGIN
//post aka login for existing users
router.post('/login', function(request, response){
	//1. find the user with the cooresponding email address
	User.findOne({email: request.body.email}, function(err, user){ //return the one (findOne) user with that email address
		//check if there is a user that was returned from the db
		if(user){
			bcrypt.compare(request.body.password, user.password, function(err, match){
				if(match === true){ //if the match is true and the login session is active(true), then redirect the user to their profile page
					request.session.loggedIn === true; //we know that we're logged in from this line
					// response.redirect('/users' + user.index);
					response.redirect('/users/profile');
					// response.redirect('');
				}else{
					response.redirect('/users/login');
				}
			})
		}else{
			response.redirect('/users/login');
		}
	}) 
	//2. check if the password on that user matches the password from the request (hashed)

	
})


module.exports = router;








