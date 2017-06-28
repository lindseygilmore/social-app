var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path'),
    session = require('express-session'),
    Profile = require('./models/Profile');
    require('./db/db.js');

app.use(session( {
  secret: "I'm a secret password",
  resave: false,
  saveUninitialized: true,
  cookie: {secure: false}
}));

var ProfileController = require('./controllers/ProfileController'); //updated
var UserController = require('./controllers/UserController');

app.use('/profiles', ProfileController);
app.use('/users', UserController);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(request, response){
  response.render('home');
})

server.listen(3000, function(){
  console.log('listening on port 3000');
})
