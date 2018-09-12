var mongoose = require('mongoose');

const Catalogingchema = new mongoose.Schema({
   b2bNationalplatform:[String],
   b2bInterNationalplatform:[String],
   b2cNationalplatform:[String],
   b2cInterNationalplatform:[String],
   socialmedia:[String]
});

const Catalog = mongoose.model('catalogPlatform', Catalogingchema);
module.exports = Catalog;