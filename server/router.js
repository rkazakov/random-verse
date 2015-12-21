var bibleApi = require('./bibleApi');
var locallydb = require('locallydb');
var db = new locallydb('db');
var collection = db.collection('verses');

var router = module.exports = require('express').Router();

router
.get('/api/v1.0/verse/random', function (req, res, next) {
  var random = Math.floor(Math.random() * 14);
  var ref = collection.get(random).reference;
  var cid = collection.get(random).cid;

  bibleApi(ref.replace(/ /g, "%20"), function(data) {
      var verse = JSON.parse(data)[0];
      verse.reference = ref;
      verse.cid = cid;
      res.send(verse);
  });
})
.get('/api/v1.0/verse/:id', function (req, res, next) {
  var id = Number(req.params.id);
  var ref = collection.get(id).reference;
  var cid = collection.get(id).cid;

  bibleApi(ref.replace(/ /g, "%20"), function(data) {
      var verse = JSON.parse(data)[0];
      verse.reference = ref;
      verse.cid = cid;
      res.send(verse);
  });
});
