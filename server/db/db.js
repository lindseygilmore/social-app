var mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/TweetBook'//choose a different word from 'books'. in this case, 'library' is the name of the database

mongoose.connect(connectionString);//tells mongoose where the database is

//send out debugging notifications to the console
mongoose.connection.on('connected', function(){
	console.log('connected to ' + connectionString);
})

mongoose.connection.on('error', function(){
	console.log('mongodb error ' + error);
})

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected from ' + connectionString);
})
