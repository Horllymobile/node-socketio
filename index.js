// run `node index.js` in the terminal
const httpServer = require('http').createServer();

const io = require('socket.io');

console.log(`Hello Node.js v${process.versions.node}!`);

const app = io(httpServer, {});


httpServer.listen(3000);
