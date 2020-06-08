const express = require('express')
const router = express.Router()

const home = require('../controllers/home')
const emailController = require('../controllers/email')

router.get('/', home.home)
router.post('/email', emailController.email)

module.exports = router