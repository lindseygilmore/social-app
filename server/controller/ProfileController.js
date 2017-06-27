
app.get('/profile', function(request, response){
	var index = request.query.index
	var person = database[index] 
	response.render('profile', person);
})