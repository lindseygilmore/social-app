var express = require('express');
var router = express.Router();
var Comment = require('../models/Comment');
var bodyParser = require('body-parser');
var User = require('../models/User');
//databse of users
// var database = [
// 	{name: 'Annie Martin', title: 'Number 1 DJ in the world', comapny: 'XTRMTYS', image: 'https://d2a2cq7hbv4jvj.cloudfront.net/wp-content/uploads/2015/01/daft-600.jpg', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Emily Higgins', index: 2}], loggedIn: true},
// 	{name: 'Paula Gilmore', title: 'Michelin-rated Chef and Wine Connoisseur', comapny: 'Gilmore Creations', image: 'https://scontent.xx.fbcdn.net/v/t31.0-8/10710375_10205310796077375_5357039206628249550_o.jpg?oh=3866f830a861bb783205e99a4c4189ba&oe=59D14A4D', topFriends: [{name: 'Annie Martin', index: 0}, {name: 'Emily Higgins', index: 2}, {name: 'Eames Gilmore', index: 3}], loggedIn: true},
// 	{name: 'Emily Higgins', title: 'Professional Blogger', comapny: 'Higgins Enterprise', image: 'http://cdn.newsapi.com.au/image/v1/26a2476dc344c27ac3e7670c9df711b2', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Annie Martin', index: 0}], loggedIn: true},
// 	{name: 'Eames Gilmore', title: '2018 Masters Winner', comapny: 'PGA', image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12046748_3940984204395_3273130434587251649_n.jpg?oh=5ef32217aef1ed7979e5d7074ce23e8d&oe=59E12425', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Emily Higgins', index: 2}, {name: 'Annie Martin', index: 0}], loggedIn: true}
// ];

router.use(bodyParser.urlencoded({extended: true}));

//annie -- add ?index=0 to url
//paula -- add ?index=1 to url
//emily -- add ?index=2 to url
//eames -- add ?index=3 to url
router.get('/:id', function(request, response){
	var id = request.params.id;
	// var index = request.query.index
	// var person = database[index] 
	User.findById(id, function(err, user){
		response.render('profile', user)
	})
	
})

//GET request to profile/view
router.get('/view/:id', function(request, response){
	var id = request.params.id;
	Profile.findById(id, function(err, profile){
		console.log(profile);
		console.log(profile.name);
		response.render('profiles', profile);
	})

})

module.exports = router;