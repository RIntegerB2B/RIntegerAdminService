
var jwt = require('jsonwebtoken');
exports.signAuth = function (req, res) {

    
var secretKey = '123456789?*!^sghd';
var token = req.headers['authorization'];
    /* AdminAccount.findOne({
        'userName': req.body.userName
    }, function (err, userDetail) {
        if (err) {
            res.status(500).send({
                message: "Some error occurred while retrieving notes."
            });
        } else {
                if(userDetail.length > 0)
                {
                   next();
        }
        }
    }); */
   
};

