var bibleApi = require('./bibleApi');

var router = module.exports = require('express').Router();

router.get('/api/random/', function (req, res) {
  var locallydb = require('locallydb');
  var db = new locallydb('db');
  var collection = db.collection('verses');

  var random = Math.floor(Math.random() * 14);
  var ref = collection.get(random).reference;

  bibleApi(ref.replace(/ /g, "%20"), function(data) {
      var verse = JSON.parse(data)[0];
      verse.reference = ref;
      res.send(verse);
  });
});
