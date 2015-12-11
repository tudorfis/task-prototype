var express = require('express'),
    app = express(),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    crypto = require('crypto'),
    server = require('http').createServer(app);

app.use(express.static('./'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var port = 1010;
server.listen(port);
console.log('http://localhost:'+ port +' app started !');
