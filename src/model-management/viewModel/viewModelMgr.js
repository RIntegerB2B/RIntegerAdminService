
var viewModelDA= require('./viewModelDA');


exports.viewModels = function (req, res) {
    try {
        viewModelDA.viewModels(req, res)
   
    } catch (error) {
        console.log(error);
    }
}
 
exports.findModels = function (req, res) {
    try {
        viewModelDA.findModels(req, res)
   
    } catch (error) {
        console.log(error);
    }
}

/* exports.approvedModels = function (req, res) {
    try {
        viewModelDA.approvedModels(req, res)
   
    } catch (error) {
        console.log(error);
    }
} */

