


var express = require('express'), //npm install express
	app 	= express(),
	server 	= require('http').createServer(app),
	path 	= require('path'), //part of node that we need to include which is not included by default
	session = require('express-session'),
	Comment = require('./models/Comment.js');

	require('./db/db.js')

var CommentController = require('./controller/CommentController.js');
var UserController = require('./controller/UserController.js');

//need to set up session when you set up the login page so it's a secure path throughout
app.use(session({
	secret:"Shhh, I'm a secret password",
	resave: false,
	saveUninitialize: true,
	cookie: {secure: false}
}));

app.use('/comment', CommentController);//connects to comment controller file
app.use('/users', UserController);

app.use(express.static(path.join(__dirname, 'public')));


//set up handlebars
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs'); //npm install hbs



//databse of users
var database = [
	{name: 'Annie Martin', title: 'Number 1 DJ in the world', comapny: 'XTRMTYS', image: 'https://d2a2cq7hbv4jvj.cloudfront.net/wp-content/uploads/2015/01/daft-600.jpg', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Emily Higgins', index: 2}], loggedIn: true},
	{name: 'Paula Gilmore', title: 'Michelin-rated Chef and Wine Connoisseur', comapny: 'Gilmore Creations', image: 'https://scontent.xx.fbcdn.net/v/t31.0-8/10710375_10205310796077375_5357039206628249550_o.jpg?oh=3866f830a861bb783205e99a4c4189ba&oe=59D14A4D', topFriends: [{name: 'Annie Martin', index: 0}, {name: 'Emily Higgins', index: 2}, {name: 'Eames Gilmore', index: 3}], loggedIn: true},
	{name: 'Emily Higgins', title: 'Professional Blogger', comapny: 'Higgins Enterprise', image: 'http://cdn.newsapi.com.au/image/v1/26a2476dc344c27ac3e7670c9df711b2', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Annie Martin', index: 0}], loggedIn: true},
	{name: 'Eames Gilmore', title: '2018 Masters Winner', comapny: 'PGA', image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12046748_3940984204395_3273130434587251649_n.jpg?oh=5ef32217aef1ed7979e5d7074ce23e8d&oe=59E12425', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Emily Higgins', index: 2}, {name: 'Annie Martin', index: 0}], loggedIn: true}
];

app.get('/', function(request, response){ 
	response.render('home');
})

//annie -- add ?index=0 to url
//paula -- add ?index=1 to url
//emily -- add ?index=2 to url
//eames -- add ?index=3 to url
app.get('/profile', function(request, response){
	var index = request.query.index
	var person = database[index] 
	response.render('profile', person);
})

//fire up the server
server.listen(3000, function(){
	console.log('server running on port 3000')
})

