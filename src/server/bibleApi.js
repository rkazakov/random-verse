var http = require('http');

module.exports = function(param, callback) {
  // get
  var options = {
    host: 'bibleapi-dev4christ.rhcloud.com',
    port: 80,
    path: '/' + param,
    method: 'GET'
  };

  var reqGet = http.request(options, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      //process.stdout.write(data);
      //var json = JSON.parse(data);
      //console.log(json[0].text);
      callback(data);
    });
  });
  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });
};
