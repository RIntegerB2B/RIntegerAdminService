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
        const DIR = appSetting.workUplaodPath ;
        const PATH = DIR + req.params.main +  '/'   ;

        mkdirp(PATH);

        const PATH1= PATH + req.params.sub +  '/';

        mkdirp(PATH1);

        const PATH2= PATH1 +  req.params.cat  + '/'  ;

        mkdirp(PATH2);

        const PATH3= PATH2 + 'prime' ;
        mkdirp(PATH3);
       /*  const PATH = appSetting.workUplaodPath + req.params.main +  '/' +  req.params.sub +  '/' + req.params.cat  + '/' + 'prime' ; */
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH3);
               /*  addPortfolioDA.createPrimeImage(req,res,file); */
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
exports.editPrimeImage = function (req, res) {
    try {  
        const DIR = appSetting.workUplaodPath;
        const PATH = DIR + req.params.name +  '/'   ;

        mkdirp(PATH);

        const PATH1= PATH + req.params.sub +  '/';

        mkdirp(PATH1);

        const PATH2= PATH1 +  req.params.cat  + '/'  ;

        mkdirp(PATH2);

        const PATH3= PATH2 + 'prime' ;
        mkdirp(PATH3);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH3);
                addPortfolioDA.editPrimeImage(req,res,file);
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


exports.categoryImages = function (req, res) {
    try {
        const DIR = appSetting.workUplaodPath;
       /*  C:\RInteger-Project-Version2\RInteger-Admin-Service\ourwork\product\fashion\kurti\images */
       const PATH = DIR + req.params.super +  '/'  + req.params.main +  '/' +  req.params.cat ;
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                addPortfolioDA.saveImages(req,res,file);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
      
        let upload = multer({
            storage: storage
        }).array('uploads[]',30); //only 10 images can be uploaded
        upload(req,res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
            
            //do all database record saving activity
           /*  return res.json({
                uploadname: req.file.filename,
                path: PATH
            }); */
            
        });
        
    } catch (error) {
        console.log(error);
    }
}

exports.saveImages = function (req, res) {
    try {
        addPortfolioDA.saveImages(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.viewMulitpleImages = function (req, res) {
    try {
        addPortfolioDA.viewMulitpleImages(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteMulitpleImage = function (req, res) {
    try {
        addPortfolioDA.deleteMulitpleImage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.deleteCategory = function (req, res) {
    try {
        addPortfolioDA.deleteCategory(req, res);
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

exports.showMainCategory = function (req, res) {
    try {
        addPortfolioDA.showMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.categoryDetails = function (req, res) {
    try {
        addPortfolioDA.categoryDetails(req, res);
    } catch (error) {
        console.log(error);
    }
}




