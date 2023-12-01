var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', { title: 'Express' })
})

router.get('/sleep', function (req, res, next) {
	res.render('gif', {
		title: 'Сон',
		picture: 'images/sleep.gif',
		desc: 'Естественное периодическое состояние покоя и расслабления организма, сопровождающееся минимальным уровнем сознательной деятельности.',
	})
})
router.get('/eats', function (req, res, next) {
	res.render('gif', {
		title: 'Прием пищи',
		picture: 'images/eats.gif',
		desc: 'Процесс принятия готовой пищи, совершаемый в определённый период времени, обычно несколько раз в сутки.',
	})
})
router.get('/thinking', function (req, res, next) {
	res.render('gif', {
		title: 'Размышление',
		picture: 'images/thinking.gif',
		desc: 'Процесс обдумывания или размышления над какой-либо темой или идеей.',
	})
})
module.exports = router
