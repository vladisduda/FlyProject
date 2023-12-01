var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get('/sleep', function (req, res, next) {
	res.send('<h1>Сон</h1>')
})
router.get('/eats', function (req, res, next) {
	res.send('<h1>Прием пищи</h1>')
})
router.get('/thinking', function (req, res, next) {
	res.send('<h1>Размышление</h1>')
})
module.exports = router
