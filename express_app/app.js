var express = require('express')
var app = express()
var Twig = require('twig')
var twig = Twig.twig

/*
    ?Define view engine
    ! Will not work if undefined
*/
app.set('view engine', 'twig');

/*
? config twig
*/
app.set("twig options", {
    allow_async: true,
    strict_variables: false
});

//routes
app.get('/',function(req,res){
    res.render('Hello')
})


//Default middleware
app.use(function(req,res){
    res.send('Undefined')
})

const port = "8080"
app.listen(port,()=>{
    console.log("Server start at "+port)
});