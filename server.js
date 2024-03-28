const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const port = process.env.PORT || 3000;
app.set('port', port);
//direccion ip V4 de la maquina, consultar con ipconfig
server.listen(3000, '192.168.2.11' || 'localhost', function() {
console.log('Aplicación de Kipilu ' + process.pid + ' inicio en el puerto ' + port);
})