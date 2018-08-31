var approvalDA = require('./approvalDA');

exports.giveApproval = function(req,res) {
    try {
        approvalDA.giveApproval(req, res);
    } catch (error) {
        console.log(error);
    }
}
