var userRegisterDA = require('./userRegisterDA');


exports.userCreate = function (req, res) {
    try {
        userRegisterDA.userCreate(req, res);
    } catch (error) {
        console.log(error);
    }
  };
  
  
 