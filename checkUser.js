var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/fly')
var User = require('./models/user.js').User
var first_user = new User({
	username: 'vladiky',
	password: '1234',
})

first_user
	.save()
	.then(user => {
		console.log(user)
	})
	.catch(err => {
		throw err
	})
