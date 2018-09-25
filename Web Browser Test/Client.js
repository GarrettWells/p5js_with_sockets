//load http module
const http = require('http');
const server = '127.0.0.1';
const port = 3000;

//create the client

const options = {
    port: port,
    host: server,
    headers: {
        'Content-Type': 'text/plain'
    },
    method: 'GET',
    path: '/test'
};

const request = http.request(options, (res) => {
    res.read();
    res.on('data', (chunk) => {
        console.log(`the server's response is ${chunk}\n`)
    });
    res.on('end', () => {
        console.log('end of the response was reached\n')
    })
});


request.end()