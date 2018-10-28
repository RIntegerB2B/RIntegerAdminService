var permissionDA = require('./permissionDA');

exports.permissionUser = function (req, res) {
    try {
        permissionDA.permissionUser(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.getRoles = function (req, res) {
    try {
        permissionDA.getRoles(req, res);
    } catch (error) {
        console.log(error);
    }

}