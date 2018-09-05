var viewProfileDA = require('./viewProfileDA');

exports.findImages = function(req,res) {
    try{
    viewProfileDA.findImages(req,res)
    }
    catch(error) {
        console.log(error);
    }
}