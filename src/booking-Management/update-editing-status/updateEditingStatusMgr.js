var updateEditingStatusDA = require('./updateEditingStatusDA');

exports.imgReceivedStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgReceivedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.imgEditingStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgEditingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.imgDeliveryStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgDeliveryStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.imgPaymentStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgPaymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

//completed
exports.imgReceivedCompletedStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgReceivedCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.imgEditingCompletedStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgEditingCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}


exports.imgDeliveryCompletedStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgDeliveryCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.imgPaymentCompletedStatus = function (req, res) {
    try {
        updateEditingStatusDA.imgPaymentCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}