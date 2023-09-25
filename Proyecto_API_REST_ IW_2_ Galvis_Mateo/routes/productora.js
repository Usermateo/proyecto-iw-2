const { Router } = require('express')
const {createProductora} = require('../controllers/productora')

const router = Router()


router.post('/', createProductora)


module.exports = router