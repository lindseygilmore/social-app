


var express = require('express'), //npm install express
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path'), //part of node that we need to include which is not included by default
	session = require('express-session'),
	Comment = require('./models/Comment.js');

	require('./db/db.js')

var CommentController = require('./controller/CommentController.js');
var UserController = require('./controller/UserController.js');
var ProfileController = require('./controller/ProfileController.js');

//need to set up session when you set up the login page so it's a secure path throughout
app.use(session({
	secret:"Shhh, I'm a secret password",
	resave: false,
	saveUninitialize: true,
	cookie: {secure: false}
}));

app.use('/comment', CommentController);//connects to comment controller file
app.use('/users', UserController);
app.use('/profile', ProfileController);

app.use(express.static(path.join(__dirname, 'public')));


//set up handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //npm install hbs



app.get('/', function(request, response){ 
	response.render('home');
})

//fire up the server
server.listen(3000, function(){
	console.log('server running on port 3000')
})

