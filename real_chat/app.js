var app = require('express')();
var http = require('http').Server(app)
var io = require('socket.io')(http)

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket)=>{
    console.log('User connected')

    //Broadcast welcome message to all connected users except the new one
    socket.on('welcome',(pseudo)=>{
        socket.broadcast.emit('welcome',pseudo)
    })

    socket.on('disconnected',()=>{
        io.emit('disconnected')
    })

    socket.on('bye',(p)=>{
        io.emit('bye',p)
    })

    //Broadcast message sended by user
    socket.on('message',(pseudo,msg)=>{
        socket.broadcast.emit('message',pseudo,msg)
    })

    //Show users is typing
    socket.on('typing',(write)=>{
        io.emit('typing',write)
    })
});

//Server listening
http.listen(8080, function(){
    console.log('listing on 3000')
})