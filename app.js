var express = require('express');
var path = require('path');
var app = express();
var router = require('./server/router');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.use(router);

app.use('/', express.static(__dirname + '/public'));
// app.use('/css', express.static(__dirname + '/css'));
// app.use('/images', express.static(__dirname + '/images'));
// app.use('/scripts', express.static(__dirname + '/scripts'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('running localhost:' + port);
});
