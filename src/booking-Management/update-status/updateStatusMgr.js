var updateStatusDA = require ('./updateStatusDA');

exports.progressMaterialStatus = function (req, res) {
    try {
        updateStatusDA.progressMaterialStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.progressShootingStatus = function (req, res) {
    try {
        updateStatusDA.progressShootingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.progressImageEditingStatus = function (req, res) {
    try {
        updateStatusDA.progressImageEditingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.progressDeliveryStatus = function (req, res) {
    try {
        updateStatusDA.progressDeliveryStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.progressPaymentStatus = function (req, res) {
    try {
        updateStatusDA.progressPaymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.progressMaterialReturnStatus = function (req, res) {
    try {
        updateStatusDA.progressMaterialReturnStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

// completed
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
//not - completed 

exports.notCompletedMaterialStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedMaterialStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.notCompletedShootingStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedShootingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.notCompletedImageEditingStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedImageEditingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.notCompletedDeliveryStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedDeliveryStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.notCompletedPaymentStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedPaymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.notCompletedMaterialReturnStatus = function (req, res) {
    try {
        updateStatusDA.notCompletedMaterialReturnStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}






