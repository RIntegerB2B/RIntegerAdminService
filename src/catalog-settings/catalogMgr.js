var catalogDA = require('./catalogDA');

exports.addB2BNational = function(req,res) {
    try{
        catalogDA.addB2BNational(req,res);
    } catch(error)
    {
        console.log(error);
    }
   
}