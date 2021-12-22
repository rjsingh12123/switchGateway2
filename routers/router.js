var express = require('express');
var router = express.Router()
var foodService = require('./fooddService')
var dietService = require('./dietService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(foodService)
router.use(dietService)

module.exports = router
