
const express = require('express')
const { getHomePage, duMa } = require('../controller/homeController')
const router = express.Router();

router.get('/', getHomePage)

router.get(`/duma`, duMa)

module.exports = router