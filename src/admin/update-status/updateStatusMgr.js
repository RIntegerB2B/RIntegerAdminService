var updateStatusDA = require ('./updateStatusDA');

exports.updateMaterialStatus = function (req, res) {
    try {
        updateStatusDA.updateMaterialStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}


exports.shootingStatus = function (req, res) {
    try {
        updateStatusDA.shootingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}



exports.imageEditingStatus = function (req, res) {
    try {
        updateStatusDA.imageEditingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.deliveryStatus = function (req, res) {
    try {
        updateStatusDA.deliveryStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.paymentStatus = function (req, res) {
    try {
        updateStatusDA.paymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.materialReturnStatus = function (req, res) {
    try {
        updateStatusDA.materialReturnStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.orderStatus = function (req, res) {
    try {
        updateStatusDA.orderStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}