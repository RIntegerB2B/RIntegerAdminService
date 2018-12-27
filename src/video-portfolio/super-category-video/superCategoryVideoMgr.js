var superCategoryVideoDA = require('../super-category-video/superCategoryVideoDA')



exports.superCategoryInsert = function (req, res) {
    try {
        superCategoryVideoDA.superCategoryInsert(req, res);
    } catch (error) {
        console.log(error);
    }
}



exports.superCategoryEdit = function (req, res) {
    try {
        superCategoryVideoDA.superCategoryEdit(req, res);
    } catch (error) {
        console.log(error);
    }

}

exports.superCategoryDelete = function (req, res) {
    try {
        superCategoryVideoDA.superCategoryDelete(req, res);
    } catch (error) {
        console.log(error);
    }
}

exports.superCategoryShow = function (req, res) {
    try {
        superCategoryVideoDA.superCategoryShow(req, res);
    } catch (error) {
        console.log(error);
    }
}