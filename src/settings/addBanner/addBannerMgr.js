var addBannerDA = require('./addBannerDA');
const multer = require('multer');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');

exports.createBanner = function (req, res) {
  try {
    addBannerDA.createBanner(req, res)
  } catch (error) {
    console.log(error);
  }
  console.log(req)
}

exports.deleteBannerImage = function(req,res) {
    try{
        addBannerDA.deleteBannerImage(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.findBanner = function(req,res) {
    try{
        addBannerDA.findBanner(req,res)
    }
    catch(error) {
        console.log(error);
    }
}