let app = require('express')();
let server = require('http').createServer(app);
let io = require('socket.io')(server);
 
io.on('connection', (socket) => {

  socket.on('room', function(room) {
    socket.join(room);
  });
 
  socket.on('disconnect', function(){
    io.emit('users-changed', {user: socket.username, event: 'left'});   
  });
 
  socket.on('set-name', (name) => {
    socket.username = name;
    io.emit('users-changed', {user: name, event: 'joined'});    
  });
  
  socket.on('send-message', (room, message) => {
    console.log(room)
    console.log(message)
    io.to(room).emit('message', {msg: message, user: socket.username, createdAt: new Date()});    
  });
});
 
var port = process.env.PORT || 3001;
 
server.listen(port, function(){
   console.log('Express running → http://localhost:' + port);
});
