var jwt = require('jsonwebtoken');

var AdminAccount = require('./../../model/adminAccount.model')
exports.validateToken = function (req, res, next) {
  console.log('LOGGED');
  var secretKey = '123456789?*!^sghd';
  var token = req.headers['authorization'];
  var allowAnonymousRoutes = ['/test', 'some other route'];

  for (var i = 0; i < allowAnonymousRoutes.length; i++) {
    if (allowAnonymousRoutes[i] === req.path) {
      next();
    }
  }
  if (!token) return res.status(401).send({
    auth: false,
    message: 'No token provided.'
  });
  else
    jwt.verify(token, secretKey, function (err, userName) {
      if (err)
        return res.status(401).send({
          auth: false,
          message: 'Failed to authenticate token.'
        });

      //Check userName is available in MongoDB, if it is there next() , or return res.status(401).send({       auth: false,        message: 'Token is invalid'    });

      AdminAccount.findOne({
        'userName': userName.id
      }, function (err, userDetail) {
        if (err) {
          res.status(500).send({
            message: "Some error occurred while retrieving notes."
          });
        } else {
          if (!userDetail) return res.status(401).send({
            auth: false,
            message: 'not find'
          });
          next();
          console.log(userDetail);
        }
      })
    });
};
