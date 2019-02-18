var jwt = require('jsonwebtoken');

exports.validateToken = function (req, res, next) {
    console.log('LOGGED');
    var secretKey = '123456789?*!^sghd';
    var token = req.headers['x-access-token'];
    var allowAnonymousRoutes = ['/test', 'some other route'];

    for (var i = 0; i < allowAnonymousRoutes.length; i++) {
        if (allowAnonymousRoutes[i] == req.path) {
            next();
        }
    }
    next(); // Delete this line and uncomment below lines after implementation
    /* if (!token) return res.status(401).send({
        auth: false,
        message: 'No token provided.'
    });

    jwt.verify(token, secretKey, function (err, userName) {
        if (err)
            return res.status(401).send({
                auth: false,
                message: 'Failed to authenticate token.'
            });
        //Check userName is available in MongoDB, if it is there next() , or return res.status(401).send({       auth: false,        message: 'Token is invalid'    });
        next();
    }); */

};