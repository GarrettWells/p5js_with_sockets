//Load HTTP module
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain',
                        'Header2': 'value2'});
    res.write('Hello World\n')
    res.end(console.log('received request'));
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});