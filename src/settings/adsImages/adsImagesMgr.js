var adsImagesDA = require('./adsImagesDA');
const multer = require('multer');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');

exports.createAds = function (req, res) {
    try {
        const PATH = appSetting.adUploadPath;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                adsImagesDA.createAds(req,file.originalname,res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        }).single('file');
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
        });
        
    } catch (error) {
        console.log(error);
    }
  }
  

  exports.findAds = function (req, res) {
    try {
        adsImagesDA.findAds(req, res)
    } catch (error) {
      console.log(error);
    }
  }
  

  exports.deleteAds = function (req, res) {
    try {
        adsImagesDA.deleteAds(req, res)
    } catch (error) {
      console.log(error);
    }
  }
  