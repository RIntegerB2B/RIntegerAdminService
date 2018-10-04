var updateCreativeStatusDA = require('./updateCreativeStatusDA');


exports.materialReceivedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.materialReceivedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.shootPlanningStatus = function (req, res) {
    try {
        updateCreativeStatusDA.shootPlanningStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.shootingStatus = function (req, res) {
    try {
        updateCreativeStatusDA.shootingStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.postProductionWorkStatus = function (req, res) {
    try {
        updateCreativeStatusDA.postProductionWorkStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}


exports.creativePaymentStatus = function (req, res) {
    try {
        updateCreativeStatusDA.creativePaymentStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

exports.creativeMaterialReturnStatus = function (req, res) {
    try {
        updateCreativeStatusDA.creativeMaterialReturnStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

// completed status
exports.materialReceivedCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.materialReceivedCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.shootPlanningCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.shootPlanningCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.shootingCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.shootingCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.postProductionCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.postProductionCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.creativePaymentCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.creativePaymentCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.creativeMaterialReturnCompletedStatus = function (req, res) {
    try {
        updateCreativeStatusDA.creativeMaterialReturnCompletedStatus(req, res)
   
    } catch (error) {
        console.log(error);
    }
}