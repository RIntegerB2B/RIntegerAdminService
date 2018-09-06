var viewProfileDA = require('./viewProfileDA');

exports.findImages = function(req,res) {
    try{
    viewProfileDA.findImages(req,res)
    }
    catch(error) {
        console.log(error);
    }
}

exports.deleteEcomImage = function(req,res) {
    try{
    viewProfileDA.deleteEcomImage(req,res)
    }
    catch(error) {
        console.log(error);
    }
}

exports.deletePortraitImage = function(req,res) {
    try{
    viewProfileDA.deletePortraitImage(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.deleteProductImage = function(req,res) {
    try{
    viewProfileDA.deleteProductImage(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
