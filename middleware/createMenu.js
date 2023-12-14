const Gif = require('./../models/gif').Gif

module.exports = async function (req, res, next) {
	try {
		res.locals.nav = []
		const result = await Gif.find({}, { _id: 0, title: 1, nick: 1 })
		res.locals.nav = result
		next()
	} catch (err) {
		throw err
	}
}
