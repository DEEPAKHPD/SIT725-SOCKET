const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', socket => {
  console.log('User connected');
  socket.on('message', message => {
    console.log(`Received message: ${message}`);
    socket.send(`Echo: ${message}`);
  });
});
