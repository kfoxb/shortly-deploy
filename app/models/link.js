var db = require('../config');
var crypto = require('crypto');

var createSha = function(url) {
  this.on('creating', function(model, attrs, options) {
    var shasum = crypto.createHash('sha1');
    shasum.update(url);
    return shasum.digest('hex').slice(0, 5));
  });
}

var linkSchema = mongoose.Schema({
  url: String,
  baseUrl: String,
  code: String,
  title: String,
  visits: Number,
  link: String
});

var Link = mongoose.model('Link', linkSchema);

linkSchema.pre('save', function(next) {
  var code = createSha(this.url);
  this.code = code;
  next();
});

module.exports = Link;
