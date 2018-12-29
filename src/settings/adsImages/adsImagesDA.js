var AdsImages = require('../../model/adsImages.model');
var appSetting = require('../../config/appSetting');
var fs = require('fs');

exports.createAds = function (req,  file, res) {
    var adDetail = new AdsImages();
    adDetail.position = req.body.position;
    adDetail.adImageName =  file;

    adDetail.save(function (err, contentData) {
        if (err) {
            console.log(err);
        } else {
            AdsImages.find({
            }).select().exec(function (err, adsImages) {
                if (err) {
                    res.status(500).send({
                        message: "Some error occurred while retrieving notes."
                    });
                } else {
                    var arraylength =adsImages.length-1;
                    for (var i= 0; i<=arraylength; i++)
                    {
                        adsImages[i].adImageName = appSetting.adServerPath  +  '/' + adsImages[i].adImageName;
                    }
                    res.status(200).json(adsImages);
                }
            });
        }
    });
}

exports.findAds = function (req, res) {
    AdsImages.find({
}).select().exec(function (err, adsImages) {
    if (err) {
        res.status(500).send({
            message: "Some error occurred while retrieving notes."
        });
    } else {
        var arraylength =adsImages.length-1;
        for (var i= 0; i<=arraylength; i++)
        {
            adsImages[i].adImageName = appSetting.adServerPath  +  '/' + adsImages[i].adImageName;
        }
        res.status(200).json(adsImages);
    }
});
  }

  exports.deleteAds = function (req, res) {
    AdsImages.findById( req.params.id
, function (err, data) {
        if (err) {
            res.status(500).send({
                message: 'some thing went wrong'
            })
        } 
        else {
            const DIR = appSetting.adUploadPath;
            const PATH = DIR +  '/' + data.adImageName;
            fs.unlink(PATH, (err) => {
                if (err) {throw err;} 
                else {
                    AdsImages.findByIdAndRemove(req.params.id,function (err, adsImages) {
                        if (err) {
                            res.status(500).send({
                                message: "Some error occurred while retrieving notes."
                            });
                        } else {
                            AdsImages.find({
                            }).select().exec(function (err, adsImages) {
                                if (err) {
                                    res.status(500).send({
                                        message: "Some error occurred while retrieving notes."
                                    });
                                } else {
                                    var arraylength =adsImages.length-1;
                                    for (var i= 0; i<=arraylength; i++)
                                    {
                                        adsImages[i].adImageName = appSetting.adServerPath  +  '/' + adsImages[i].adImageName;
                                    }
                                    res.status(200).json(adsImages);
                                }
                            });
                        }
                    });
                }
            })
           
        }
    })
}