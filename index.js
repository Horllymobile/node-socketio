// run `node index.js` in the terminal
import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();

const io = new Server(httpServer, {});

io.on('connect', socket => {
  console.log(`New connection from ${socket.id}`);
  console.log(socket.data);
});

httpServer.listen(3000);
