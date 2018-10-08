var updateRegistrationStatusDA = require('./updateRegistrationStatusDA');

exports.documentsRequiredStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.documentsRequiredStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.accountCreationStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.accountCreationStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.brandRegistrationStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.brandRegistrationStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.verificationStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.verificationStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.activationStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.activationStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.detailsStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.detailsStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.paymentStatus = function (req, res) {
    try {
        updateRegistrationStatusDA.paymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
