var ModelDetail = require('../../model/model.model');



exports. giveApproval = function (req, res) {
    ModelDetail.findOne({
        '_id': req.params.id
    }, function (err, data) {
        if (err) res.status(500).json(0);
        else {
            data.isActive = 1;
            data.save(function(err,updatedData){
                if(err){
                    res.status(500).send({
                        message:1
                    }
                );
                }
                else{
                    res.status(200).json(updatedData);
                }
            })
        }
    });
}