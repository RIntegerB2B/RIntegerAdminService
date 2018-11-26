var addPortfolioDA = require('../add-portfolio/addportfolioDA');
var appSetting = require('../../config/appSetting');
const multer = require('multer');
var fs = require('fs');
var mkdirp = require('mkdirp');

exports.mainCategoryData = function (req, res) {
    try {
        addPortfolioDA.mainCategoryData(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryOnSub = function (req, res) {
    try {
        addPortfolioDA.mainCategoryOnSub(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createPrimeImage = function (req, res) {
    try {
        const DIR = appSetting.workUplaodPath;
        const PATH = DIR + req.params.main +  '/'   ;

        mkdirp(PATH);

        const PATH1= PATH + req.params.sub +  '/';

        mkdirp(PATH1);

        const PATH2= PATH1 +  req.params.cat ;

        mkdirp(PATH2);

        const PATH3= PATH2 + '/' + 'prime' ;
        mkdirp(PATH3);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH3);
                addPortfolioDA.createPrimeImage(req,res,file);
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
            //do all database record saving activity
           /*  return res.json({
                originalname: req.file.originalname,
                uploadname: req.file.filename,
                path: PATH
            }); */
        });
        
    } catch (error) {
        console.log(error);
    }
}


exports.createCategory = function (req, res) {
    try {
        addPortfolioDA.createCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.showCategory = function (req, res) {
    try {
        addPortfolioDA.showCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

