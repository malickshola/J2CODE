var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
// create application/json parser
var jsonParser = bodyParser.json()

app.get('/',jsonParser,(req,res)=>{
    res.send('Hello')
})

app.post('/',jsonParser,(req,res)=>{
    if(!req.body) return res.sendStatus(400)
    res.send(req.body)
})

app.listen(8081)