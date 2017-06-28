
//databse of users
// var database = [
// 	{name: 'Annie Martin', title: 'Number 1 DJ in the world', comapny: 'XTRMTYS', image: 'https://d2a2cq7hbv4jvj.cloudfront.net/wp-content/uploads/2015/01/daft-600.jpg', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Emily Higgins', index: 2}], loggedIn: true},
// 	{name: 'Paula Gilmore', title: 'Michelin-rated Chef and Wine Connoisseur', comapny: 'Gilmore Creations', image: 'https://scontent.xx.fbcdn.net/v/t31.0-8/10710375_10205310796077375_5357039206628249550_o.jpg?oh=3866f830a861bb783205e99a4c4189ba&oe=59D14A4D', topFriends: [{name: 'Annie Martin', index: 0}, {name: 'Emily Higgins', index: 2}, {name: 'Eames Gilmore', index: 3}], loggedIn: true},
// 	{name: 'Emily Higgins', title: 'Professional Blogger', comapny: 'Higgins Enterprise', image: 'http://cdn.newsapi.com.au/image/v1/26a2476dc344c27ac3e7670c9df711b2', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Eames Gilmore', index: 3}, {name: 'Annie Martin', index: 0}], loggedIn: true},
// 	{name: 'Eames Gilmore', title: '2018 Masters Winner', comapny: 'PGA', image: 'https://scontent.xx.fbcdn.net/v/t1.0-9/12046748_3940984204395_3273130434587251649_n.jpg?oh=5ef32217aef1ed7979e5d7074ce23e8d&oe=59E12425', topFriends: [{name: 'Paula Gilmore', index: 1}, {name: 'Emily Higgins', index: 2}, {name: 'Annie Martin', index: 0}], loggedIn: true}
// ];

//annie -- add ?index=0 to url
//paula -- add ?index=1 to url
//emily -- add ?index=2 to url
//eames -- add ?index=3 to url
// router.get('/:id', function(request, response){
// 	var id = request.params.id;
// 	// var index = request.query.index
// 	// var person = database[index] 
// 	User.findById(id, function(err, user){
// 		response.render('profile', user)
// 	})
	
// })

var express = require('express');
var router = express.Router();
var Profile = require('../models/Profile');
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));


// router.get('/home', function(request, response){
//   response.render('home');
// })

// GET request to /profile/view
router.get('/view', function(request, response){
  Profile.find(function(error, profiles){
    if(request.session.loggedIn === true){
      var myProfile = {allProfiles: profiles, loggedIn: true};
      response.render('profiles', myProfile);
    }else{
      response.redirect('/users/login');
    }
  })
})

// GET request to return all the profiles
router.get('/', function(request, response){
  //send all the profiles
  Profile.find(function(error, profiles){
    response.json(profiles);
  });
})

// GET request to a specific profile (by id)
router.get('/:id', function(request, response){
  //send specific profile with that id
  var id = request.params.id;
  Profile.findById(id, function(error, profile){
    // return the specific profile
    console.log('success');
    // response.json(profile); 
  })
})

// POST a new profile -- do i need this??
router.post('/', function(request, response){
  //create a new profile
  var profile = new Profile({ email: request.body.email,
                              password: request.body.password,
                              name: request.body.name,
                              age: request.body.age,
                              profession: request.body.profession
                              });
  profile.save();
  response.json(profile);
})

// PATCH an existing profile to edit
router.patch('/:id', function(request, response){
  //update a profile by id
  var id = request.params.id;
  Profile.findById(id, function(error, profile){
    profile.email = request.body.email;
    profile.password = request.body.password;
    profile.name = request.body.name;
    profile.age = request.body.age;
    profile.profession = requiest.body.profession;

    profile.save();
    response.json(profile);

  })
})

// DELETE an exising profile forever
router.delete('/:id', function(request, response){
  //delete a profile by id
  var id = request.params.id;
  Profile.findById(id, function(error,book){
    profile.remove();
    response.json("success");
  })
})

module.exports = router;
