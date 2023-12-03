const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/testik')

var schema = mongoose.Schema({ name: String })

schema.methods.scholoh = function () {
	console.log(this.get('name') + ' подумал, покушал и лег спать')
}

const Gif = mongoose.model('Gif', schema)

const Meme = new Gif({ name: 'Рома' })
Meme.save()
	.then(function () {
		Meme.scholoh()
	})
	.catch(function (err) {
		console.error(err)
	})
