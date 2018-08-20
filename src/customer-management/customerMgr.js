var customerDA= require('./customerDA');



exports.findCustomers = function (req, res) {
    try {
        customerDA.findCustomers(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findModelType = function (req, res) {
    try {
        customerDA.findModelType(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.findShootType = function (req, res) {
    try {
        customerDA.findShootType(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.findProductType = function (req, res) {
    try {
        customerDA.findProductType(req, res)
   
    } catch (error) {
        console.log(error);
    }
}