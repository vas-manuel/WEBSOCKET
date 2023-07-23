/*const fs = require('fs');

const WebSocket = require('ws');


const wss = new WebSocket.Server({ port: 8181 });
console.log("Servidor websocket escuchando en el puerto 8181")

server.on('upgrade', (request, socket, head) => {
  const origin = request && request.headers && request.headers.origin;
  const corsRegex = /^https?:\/\/(.*\.?)abc\.com(:\d+)?\/$/g
  if (origin && origin.match(corsRegex) != null) {
    wss.handleUpgrade(request, socket, head, (ws) => {
      wss.emit('connection', ws, request);
    });
  } else {
    socket.destroy();
  }
});

wss.on('connection', function connection(ws) {
  console.log("Cliente conectado.")
  ws.on('message', function incoming(message) {
    console.log("Mensaje recibido: " + message)
     wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });

  });
});
*/
/** ssl
 * 
 * 
 */
/*
import { createServer } from 'http';
import WebSocket, { WebSocketServer } from 'ws'

function onSocketError(err) {
  console.error(err);
}

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws, request, clientes) {
  ws.on('error', console.error);
console.log("Conectado")
  ws.on('message', function message(data, isBinary) {
    console.log("Mensaje recibido: " + data)
    
     wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        
        client.send(data, { binary: isBinary });
      }
    });
    //console.log(data)
    //console.log(`Received message ${data} from user ${client}`);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  
    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request);
    });
});

server.listen(8181,'wss.devurbenic.cl', function(){
console.log("Conectado puerto 8181")
});
*/

import http from 'http';

const server = http.createServer();
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});

io.on('connection', (socket) => {
    console.log('New client connection!');

    socket.on('message', (data) => {
        console.log('message', data);

        io.emit('message', data);
    })
});

server.listen(8181);