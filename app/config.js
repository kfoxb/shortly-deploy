var mongoose = require('mongoose');
var path = require('path');
var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: path.join(__dirname, '../db/shortly.sqlite')
  },
  useNullAsDefault: true
});
// var db = require('bookshelf')(knex);

mongoose.connect('mongodb://localhost/shortlydb');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:');
db.once('open', function() {
  console.log('connected!');
});

module.exports = db;
