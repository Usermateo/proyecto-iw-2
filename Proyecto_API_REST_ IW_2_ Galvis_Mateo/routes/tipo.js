const { Router } = require('express')
const {createTipo} = require('../controllers/tipo')

const router = Router()


router.post('/', createTipo)


module.exports = router