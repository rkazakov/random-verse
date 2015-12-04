var locallydb = require('locallydb');

var db = new locallydb('db');
var collection = db.collection('verses');

if (collection.items.length === 0)
{
  collection.insert([
    {reference: "Psalm 16:8"},
    {reference: "Psalm 34:8"},
    {reference: "Psalm 46:10"},
    {reference: "Psalm 55:22"},
    {reference: "Psalm 119:89"},
    {reference: "Psalm 119:50"},
    {reference: "Psalm 120:1"},
    {reference: "Proverbs 3:5-6"},
    {reference: "Proverbs 18:10"},
    {reference: "Isaiah 26:3"},
    {reference: "Isaiah 41:10"},
    {reference: "John 14:27"},
    {reference: "John 16:33"},
    {reference: "Galatians 2:20"},
    {reference: "Revelation 21:4"}
  ]);
}

//console.log(collection.items.length);
