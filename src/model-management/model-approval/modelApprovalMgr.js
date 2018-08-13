var modelApprovalDA = require('./modelApprovalDA');

exports.giveApproval = function (req, res) {
    try {
        modelApprovalDA.giveApproval(req, res)
   
    } catch (error) {
        console.log(error);
    }
}