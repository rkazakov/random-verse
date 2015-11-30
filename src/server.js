var poller = require('./server/poller');
var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use('/css', express.static(__dirname + '/css'));
app.use('/images', express.static(__dirname + '/images'));
app.use('/scripts', express.static(__dirname + '/scripts'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  poller('Gen1:2');
});
