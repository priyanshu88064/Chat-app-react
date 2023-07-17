const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server,{
  cors:{
      origin:"*"
  }
});


app.get('/', (req, res) => {
  res.send("Server is running....");
});

io.on('connection',(socket)=>{

  console.log("A user is connected.");

  socket.on('send-message',(message)=>{
    console.log(message)
    socket.broadcast.emit('recieve-message',message);
  });

  socket.on("disconnecting",()=>{
    console.log("A socket is disconnecting",socket.id);
  })

});

server.listen(5000, () => {
  console.log('Server is running on port 5000');
});