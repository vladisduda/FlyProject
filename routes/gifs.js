var express = require('express')
var router = express.Router()
var Gif = require('../models/gif').Gif
var async = require('async')

router.get('/:nick', async function (req, res, next) {
	try {
		const [gif, gifs] = await Promise.all([
			Gif.findOne({ nick: req.params.nick }),
			Gif.find({}, { _id: 0, title: 1, nick: 1 }),
		])

		if (!gif) {
			throw new Error('Ошибочка')
		}

		renderGif(res, gif.title, gif.avatar, gif.desc, gifs)
	} catch (err) {
		next(err)
	}
})

function renderGif(res, title, picture, desc, gifs) {
	console.log(gifs)

	res.render('gif', {
		title: title,
		picture: picture,
		desc: desc,
	})
}

module.exports = router
