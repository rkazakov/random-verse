var http = require('http');

module.exports = function(param) {
  // get
  var optionsget = {
    host: 'bibleapi-dev4christ.rhcloud.com',
    port: 80,
    path: '/' + param,
    method: 'GET'
  };

  var reqGet = http.request(optionsget, function(res) {
    res.setEncoding('utf8');
    res.on('data', function(data) {
      //process.stdout.write(data);
      var json = JSON.parse(data);
      console.log(json[0].text);
    });
  });
  reqGet.end();
  reqGet.on('error', function(e) {
    console.error(e);
  });
};
