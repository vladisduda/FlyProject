var User = require('../models/user').User

module.exports = function (req, res, next) {
	res.locals.user = null

	// Проверка наличия идентификатора пользователя в сессии
	if (req.session.user) {
		User.findById(req.session.user)
			.then(user => {
				// Если пользователь найден, устанавливаем в res.locals.user
				res.locals.user = user || null
				next()
			})
			.catch(err => {
				// Обработка ошибки, если поиск не удался
				next(err)
			})
	} else {
		// Если отсутствует идентификатор пользователя, переходим к следующему middleware
		next()
	}
}
