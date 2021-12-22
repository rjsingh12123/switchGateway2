var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'https://switchfood.herokuapp.com/'
const api = apiAdapter(BASE_URL)

router.get('/food', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.get('/food/:foodId', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.get('/food/alt/:tag', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.post('/food/image', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router
