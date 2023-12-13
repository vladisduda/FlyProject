const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')
var Gif = require('./models/gif').Gif

var schema = mongoose.Schema({ name: String })

var gif = new Gif({
	title: 'Чмоня',
	nick: 'Chmonya',
})
console.log(gif)

gif.save().then(function (err, gif, affected) {
	console.log(gif.title)
})
