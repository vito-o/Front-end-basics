const mongoose = require('mongoose');
mongoose.connect('mongodb://192.168.11.128:27017/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('mongo connected')
});

module.exports = {
  User: require('./user')
}