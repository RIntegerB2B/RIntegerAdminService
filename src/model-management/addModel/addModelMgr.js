var addModelDA = require('./addModelDA');
const multer = require('multer');
var mkdirp = require('mkdirp');

exports.createModel = function (req, res) {
    try {
        addModelDA.createModel(req, res)
    } catch (error) {
        console.log(error);
    }
}

exports.createportFolioImage = function (req, res) {
    try {
        const DIR = './models/serviceproviders/';
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
        }).single('file');
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                return res.status(501).json({
                    error: err
                });
            }
            //do all database record saving activity
            return res.json({
                originalname: req.file.originalname,
                uploadname: req.file.filename
            });
        });

    } catch (error) {
        console.log(error);
    }
}