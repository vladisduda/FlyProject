const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Fly = require('./models/fly').Fly

var schema = mongoose.Schema({ name: String })

var fly = new Fly({
	title: 'Чмоня',
	nick: 'Chmonya',
})
console.log(fly)
fly.save().then(function (err, fly, affected) {
	console.log(fly.title)
})
