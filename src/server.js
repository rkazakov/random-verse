var http = require('http');
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

  // get
  var optionsget = {
    host : 'bibleapi-dev4christ.rhcloud.com', // here only the domain name
    port : 80,
    path : '/Gen1:1', // the rest of the url with parameters if needed
    method : 'GET' // do GET
  };

  var reqGet = http.request(optionsget, function(res) {
    res.on('data', function(d) {
      process.stdout.write(d);
    });
  });
  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });

  console.log('Listening on port %s...', port);
});
