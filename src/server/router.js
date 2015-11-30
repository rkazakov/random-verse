var bibleApi = require('./bibleApi');

var router = module.exports = require('express').Router();

router.get('/api/random/', function (req, res) {
  var locallydb = require('locallydb');
  var db = new locallydb('_mockdb');
  var collection = db.collection('verses');

  var random = Math.floor(Math.random() * 14);
  var ref = collection.get(random).reference;

  bibleApi(ref.replace(/ /g, "%20"), function(data) {
      res.send(JSON.parse(data));
  });
});
