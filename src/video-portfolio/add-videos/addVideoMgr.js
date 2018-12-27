var addVideoDA = require('../add-videos/addVideoDA');
var appSetting = require('../../config/appSetting');

exports.mainCategoryData = function (req, res) {
    try {
        addVideoDA.mainCategoryData(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryOnSub = function (req, res) {
    try {
        addVideoDA.mainCategoryOnSub(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.createPrimeImage = function (req, res) {
    try {
        addVideoDA.createPrimeImage(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.editPrimeImage = function (req, res) {
    try {  
        addVideoDA.editPrimeImage(req, res);
        
    } catch (error) {
        console.log(error);
    }
}




exports.saveVideo = function (req, res) {
    try {
        addVideoDA.saveVideo(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.deleteCategory = function (req, res) {
    try {
        addVideoDA.deleteCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.createCategory = function (req, res) {
    try {
        addVideoDA.createCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.showCategory = function (req, res) {
    try {
        addVideoDA.showCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.showMainCategory = function (req, res) {
    try {
        addVideoDA.showMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}
exports.categoryDetails = function (req, res) {
    try {
        addVideoDA.categoryDetails(req, res);
    } catch (error) {
        console.log(error);
    }
}




