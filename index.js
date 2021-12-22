var express = require('express');
var app = express();
var router = require('./routers/router')
var bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send("Switch Gateway")
})

app.use(router)

app.listen(process.env.PORT || '3000');
