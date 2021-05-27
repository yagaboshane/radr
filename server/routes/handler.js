const express = require('express')
const router = express.Router()
const Scrapper = require('../scrapper')


router.get('/destination', Scrapper.travelDestinations) 

module.exports = router;