var mongo = require('mongoskin');
var db = mongo.db("mongodb://localhost:27017/inmobilia", {native_parser:true});

module.exports = db;