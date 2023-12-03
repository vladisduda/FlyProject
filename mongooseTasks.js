const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const Gif = mongoose.model('Gif', { name: String })
const kitty = new Gif({ name: 'Чмоня' })

kitty
	.save()
	.then(() => {
		console.log('БРРР')
	})
	.catch(err => {
		console.error(err)
	})
