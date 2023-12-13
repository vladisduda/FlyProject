var express = require('express')
var router = express.Router()
var Gif = require('../models/gif').Gif

router.get('/:nick', async (req, res, next) => {
	try {
		const gif = await Gif.findOne({ nick: req.params.nick })
		console.log(gif)
		if (!gif) {
			throw new Error('от так беда(((')
		}
		res.render('gif', {
			title: gif.title,
			picture: gif.avatar,
			desc: gif.desc,
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router
