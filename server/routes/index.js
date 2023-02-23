const express = require('express')
const router = express.Router()

router.use('/coasters', require('./coaster.routes'))
router.use('/auth', require('./auth.routes'))

module.exports = router