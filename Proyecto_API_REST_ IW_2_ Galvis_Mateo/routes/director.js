const { Router } = require('express')
const {createDirector} = require('../controllers/director')

const router = Router()


router.post('/', createDirector)


module.exports = router