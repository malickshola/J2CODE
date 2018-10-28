var express = require('express')
var app= express()

app.get('/',(req,res)=>{
    res.send('Hello')
})

app.get('/about',(req,res)=>{
    res.send('About')
})

app.listen('8081')