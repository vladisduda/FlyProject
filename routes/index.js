var express = require('express')
var router = express.Router()
const checkAuth = require('../middleware/checkAuth.js')
const Gif = require('../models/gif').Gif
const User = require('../models/user').User

/* GET home page. */
router.get('/', async (req, res, next) => {
	try {
		const menu = await Gif.find({}, { _id: 0, title: 1, nick: 1 })
		req.session.greeting = 'Hi!!!'
		res.render('index', {
			title: 'Главная',
			pictureGuest: 'images/guest.gif',
			pictureUser: 'images/user.gif',
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
		const username = req.body.username
		const password = req.body.password

		// Проверка наличия значения в полях "Имя" и "Пароль"
		if (!username || !password) {
			// Если поля не заполнены, отображаем ошибку
			return res.render('logreg', {
				title: 'Вход',
				error: 'Пожалуйста, заполните все поля',
			})
		}

		// Проверка наличия пользователя в базе данных
		let user = await User.findOne({ username: username })

		if (user) {
			// Если пользователь существует, проверяем пароль
			if (user.checkPassword(password)) {
				req.session.user = user._id
				return res.redirect('/')
			} else {
				// Если пароль неверен, отображаем ошибку
				return res.render('logreg', {
					title: 'Вход',
					error: 'Неверный пароль',
				})
			}
		} else {
			// Если пользователя нет, создаем нового
			user = new User({ username: username, password: password })

			// Сохраняем пользователя
			try {
				const savedUser = await user.save()
				req.session.user = savedUser._id
				return res.redirect('/')
			} catch (error) {
				// Обработка ошибок сохранения пользователя
				return res.render('logreg', {
					title: 'Вход',
					error: 'Произошла ошибка при создании пользователя',
				})
			}
		}
	} catch (err) {
		// Обработка других ошибок
		next(err)
	}
})
router.post('/logout', function (req, res, next) {
	req.session.destroy()
	res.locals.user = null
	res.redirect('/')
})
module.exports = router
