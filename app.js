const fs = require('fs');
const https = require('https');
const WebSocket = require('ws');

const server = https.createServer({
  cert: fs.readFileSync(__dirname + '/cert/public.pem'),
  key: fs.readFileSync(__dirname + '/cert/private.pem')
});
const wss = new WebSocket.Server({ server });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
     wss.clients.forEach(function each(client) {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });

  });
});

server.listen(8181);
