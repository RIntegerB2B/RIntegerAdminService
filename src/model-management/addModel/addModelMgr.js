var addModelDA = require('./addModelDA');
const multer = require('multer');
var mkdirp = require('mkdirp');
var appSetting = require('../../config/appSetting');
var ecommerceImage 

exports.createModel = function (req, res) {
    try {
        addModelDA.createModel(req, res)
    } catch (error) {
        console.log(error);
    }
}

exports.createportFolioImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;
        const PATH = DIR + req.params.modelName;

        mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
        let upload = multer({
            storage: storage
        }).single('file'); //multiple
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

exports.createecommerceImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;
        const PATH = DIR + req.params.modelName ;

        mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                 addModelDA.createecommerceImage(req,file.originalname,res);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
      
        let upload = multer({
            storage: storage
        }).array('uploads[]',10); //only 10 images can be uploaded
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
exports.createportraitImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;
        const PATH = DIR + req.params.modelName;

        mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                console.log(file.originalname);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
            
        });
      
        let upload = multer({
            storage: storage
        }).array('uploads[]',10); //multiple
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
exports.createproductImage = function (req, res) {
    try {
        const DIR = appSetting.imageUploadPath;
        const PATH = DIR + req.params.modelName;

        mkdirp(PATH);
        let storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, PATH);
                console.log(file.originalname);
            },
            filename: (req, file, cb) => {
                cb(null, file.originalname);
            }
        });
      
        let upload = multer({
            storage: storage
        }).array('uploads[]',10); //multiple
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

exports.updateModel = function (req, res) {
    try {
        addModelDA.updateModel(req, res)
   
    } catch (error) {
        console.log(error);
    }
}