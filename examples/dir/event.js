var http = require('http');
var EventEmitter = require('events').EventEmitter;

function handleRequest(request, response){
    response.writeHead(200,{
        'Content-Type':'application/json'
    });
    var count = 2+2;
    return response.end('O valor é ' .concat(count));
}

var server = http.createServer(handleRequest);
var ee = new EventEmitter();

server.on('connection', function (client){
    ee.emit('newConneciton', {
        num1:1,
        num2:2
    });
    console.log('there is a new client ' .concat(client.remoteAddress))
});

ee.on('newConneciton', function(data){
    console.log('Hey, I am a new event registered by event connection from HTTP module');
    console.log('data', data);
});

server.listen(3000,'127.0.0.1');
