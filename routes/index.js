var express = require('express')
var router = express.Router()
const Gif = require('../models/gif').Gif

/* GET home page. */
router.get('/', async (req, res, next) => {
	try {
		const menu = await Gif.find({}, { _id: 0, title: 1, nick: 1 })
		req.session.greeting = 'Hi!!!'
		res.render('index', {
			title: 'Главная',
			name: 'пользователь',
			picture: 'images/hallo.gif',
			counter: req.session.counter,
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router
