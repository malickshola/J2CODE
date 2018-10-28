var http = require('http')
var url = require('url')
var querystring = require('querystring')

var server = http.createServer(function(req,res){
    var path = url.parse(req.url).pathname;
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200);
    if(path=='/'){
        if('prenom' in params){
            res.write('Hello '+(params['prenom']))
        }else{
            res.write("Hello World!")
        }
        res.end()
    }
    else if(path=='/about'){
        res.end('About')
    
    
})

server.listen(8080)


https://github.com/oluwashola95/J2CODE.git