//load http module
const http = require('http');
const server = '127.0.0.1';
const port = 3000;

//create the client
const request = http.request({
    port: port,
    host: server,
    method: 'PUT',
    path: '/test'
});