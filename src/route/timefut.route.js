const express = require('express')
const timefutController = require('../controller/timefut.controller')

const router = express.Router()
router.get('/', timefutController.list)
module.exports = router
