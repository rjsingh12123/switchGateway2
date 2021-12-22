var express = require('express');
const apiAdapter = require("./apiAdapter");
var router = express.Router()

const BASE_URL = 'https://switchdiet.herokuapp.com/'
const api = apiAdapter(BASE_URL)

router.post('/user', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.post('/user/login', (req, res) => {
    api.post(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.get('/user/:userID/diet', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.put('/user/diet', (req, res) => {
    api.put(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.put('/user', (req, res) => {
    api.put(req.path).then(resp => {
        res.send(resp.data)
    })
})

module.exports = router


