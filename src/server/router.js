var bibleApi = require('./bibleApi');

var router = module.exports = require('express').Router();

router.get('/api/random/', function (req, res) {
  var value = Math.floor(Math.random() * 10) + 1;
  res.json({verse: value});

  /*bibleApi('Gen1:2', function(data) {
      res.send(JSON.parse(data));
  });*/
});
