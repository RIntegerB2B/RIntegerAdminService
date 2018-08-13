var ModelDetail = require('../../model/model.model');


exports.createModel = function (req, res) {
 var modelDetail = new ModelDetail(req.body);
 modelDetail.save(function (err, contentData) {
        if (err) {
            res.send(err);
        } else {
            res.send(contentData);
            console.log(contentData);
        }
    });
}
 