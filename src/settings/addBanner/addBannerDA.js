var BannerModel = require('./../../model/banner.model');
var appSetting = require('../../config/appSetting');
/* var fs = require('fs');
var rmdir = require('rmdir'); */

exports.createBanner = function (req, res) {
  var bannerModel = new BannerModel(req.body);
  bannerModel.save(function (err, bannerInfo) {
    if (err) {
      res.status(500).send({
        "message": 'banner Not created'
      });
      console.log(err);
    } else {
      res.status(200).send(bannerInfo);
      console.log(bannerInfo);
    }
  });
}
exports.findBanner = function (req, res) {
  BannerModel.find({}).select().exec(function (err, banners) {
    if (err) {
      res.status(500).send({
        message: 'some thing went wrong'
      });
    } else {
      res.status(200).json(banners);
    }
  });
}

exports.deleteBannerImage = function (req, res) {
  BannerModel.findByIdAndRemove(req.params.id, function (err) {
    if (err) {
      res.status(500).send({
        message: 'some thing went wrong'
      });
    } else {
      BannerModel.find({}).select().exec(function (err, deleteBanner) {
        if (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving notes."
          });
        } else {
          res.status(200).json(deleteBanner);
        }
      });
    }
  });
}