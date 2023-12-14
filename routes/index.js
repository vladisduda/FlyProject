var express = require('express')
var router = express.Router()
const Gif = require('../models/gif').Gif

/* GET home page. */
router.get('/', async (req, res, next) => {
	try {
		const menu = await Gif.find({}, { _id: 0, title: 1, nick: 1 })
		req.session.greeting = 'Hi!!!'
		res.render('index', {
			title: 'пользователь',
			picture: 'images/hallo.gif',
			menu: menu,
		})
	} catch (err) {
		next(err)
	}
})

module.exports = router
