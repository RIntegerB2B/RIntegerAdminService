var mainCategoryVideoDA = require('../main-category-video/mainCategoryVideoDA')


exports.mainCategoryInsert = function (req, res) {
    try {
        mainCategoryVideoDA.mainCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.mainCategoryDelete = function (req, res) {
    try {
        mainCategoryVideoDA.mainCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.showSuperCategory = function (req, res) {
    try {
        mainCategoryVideoDA.showSuperCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryUpdate = function (req, res) {
    try {
        mainCategoryVideoDA.mainCategoryUpdate(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.mainCategoryShow = function (req, res) {
    try {
        mainCategoryVideoDA.mainCategoryShow(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.getMainCategory = function (req, res) {
    try {
        mainCategoryVideoDA.getMainCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}


exports.getCategory = function (req, res) {
    try {
        mainCategoryVideoDA.getCategory(req, res);
    } catch (error) {
        console.log(error);
    }
}
