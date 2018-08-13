var approvalDA = require('./approvalDA');


exports.giveApproval = function (req, res) {
    try {
        approvalDA.giveApproval(req, res);
    } catch (error) {
        console.log(error);
    }
};


exports.findServiceProvider = function (req, res) {
    try {
        approvalDA.findServiceProvider(req, res);
    } catch (error) {
        console.log(error);
    }
};



exports.approved = function (req, res) {
    try {
        approvalDA.approved(req, res);
    } catch (error) {
        console.log(error);
    }
};