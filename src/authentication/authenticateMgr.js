const expressJwt = require('express-jwt');
var fs = require('fs');

const RSA_PUBLIC_KEY = fs.readFileSync('./src/assets/keys/jwtRintegerAdminPublicKey.key');

exports.checkIfAuthenticated = function(){
    expressJwt({
        secret: RSA_PUBLIC_KEY
    }); 
};