var contactUsDA = require('./contactUsDA');

exports.viewQuery = function (req, res) {
    try {
        contactUsDA.viewQuery(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.requestHandled = function (req, res) {
    try {
        contactUsDA.requestHandled(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
exports.handledRequest = function (req, res) {
    try {
        contactUsDA.handledRequest(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
