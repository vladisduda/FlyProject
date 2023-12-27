var express = require('express')
var router = express.Router()
const Gif = require('../models/gif').Gif
const User = require('../models/user').User

/* GET home page. */
router.get('/', async (req, res, next) => {
	try {
		const menu = await Gif.find({}, { _id: 0, title: 1, nick: 1 })
		req.session.greeting = 'Hi!!!'
		res.render('index', {
			title: 'Главная',
			picture: 'images/hallo.gif',
			counter: req.session.counter,
		})
	} catch (err) {
		next(err)
	}
})

router.get('/logreg', function (req, res, next) {
	res.render('logreg', { title: 'Вход', error: null })
})

router.post('/logreg', async function (req, res, next) {
	try {
		var username = req.body.username
		var password = req.body.password
		const user = await User.findOne({ username: username })

		if (user) {
			if (user.checkPassword(password)) {
				req.session.user = user._id
				res.redirect('/')
			} else {
				res.render('logreg', {
					title: 'Вход',
					error: 'Пароль не верный',
				})
			}
		} else {
			var newUser = new User({ username: username, password: password })
			const savedUser = await newUser.save()
			req.session.user = savedUser._id
			res.redirect('/')
		}
	} catch (err) {
		next(err)
	}
})
router.post('/logout', function (req, res, next) {
	req.session.destroy()
	res.locals.user = null
	res.redirect('/')
})
module.exports = router
