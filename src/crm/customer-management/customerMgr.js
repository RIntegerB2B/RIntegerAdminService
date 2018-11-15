
var customerDA = require('./customerDA');



  exports.singleCustomer = function (req, res) {
        try {
            customerDA.singleCustomer(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.allCustomers = function (req, res) {
        try {
            customerDA.allCustomers(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.customerDetailsDelete = function (req, res) {
        try {
            customerDA.customerDetailsDelete(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.customerDetailsEdit = function (req, res) {
        try {
            customerDA.customerDetailsEdit(req, res);
        } catch (error) {
            console.log(error);
        }
    
    }
    exports.customerDuplicateData = function (req, res) {
        try {
            customerDA.customerDuplicateData(req, res);
        } catch (error) {
            console.log(error);
        }
    
    
}
exports.subcribeCustomerData = function (req, res) {
    try {
        customerDA.subcribeCustomerData(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.subcribeCustomerDelete = function (req, res) {
    try {
        customerDA.subcribeCustomerDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}

