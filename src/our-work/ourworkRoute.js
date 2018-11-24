'use strict';
var superCategoryMgr = require('./super-category/superCategoryMgr');
var mainCategoryMgr = require('./main-category/mainCategoryMgr');
var addPortfolioMgr = require('./add-portfolio/addportfolioMgr');

module.exports = function (app) {

    app.route('/addCategory')
        .post(superCategoryMgr.superCategoryInsert);

    app.route('/categoryDetails')
        .get(superCategoryMgr.superCategoryShow);

    app.route('/superCategory')
        .get(mainCategoryMgr.showSuperCategory);

    app.route('/category/:id')
        .put(superCategoryMgr.superCategoryEdit);

    app.route('/categoryDelete/:categoryId')
        .delete(superCategoryMgr.superCategoryDelete);

    app.route('/mainCategoryDetails')
        .get(mainCategoryMgr.mainCategoryShow);

    app.route('/mainCategory')
        .post(mainCategoryMgr.mainCategoryInsert);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .delete(mainCategoryMgr.mainCategoryDelete);

    app.route('/category/:categoryId/mainCategory/:mainCategoryId')
        .put(mainCategoryMgr.mainCategoryUpdate);



    app.route('/superCategorydetail/:id')
        .get(mainCategoryMgr.getMainCategory);

    app.route('/categoryData/:id')
        .get(mainCategoryMgr.getCategory);

    app.route('/mainCategoryData')
        .get(addPortfolioMgr.mainCategoryData);

    app.route('/mainCategoryOnSub/:id')
        .get(addPortfolioMgr.mainCategoryOnSub);

        app.route('/primeimage/:main/subcat/:sub/cat/:cat')
        .put(addPortfolioMgr.createPrimeImage);

        app.route('/maincategory/:main/subcategory/:sub/category/:cat')
        .put(addPortfolioMgr.createCategory);

        app.route('/categorydetails')
        .get(addPortfolioMgr.showCategory);


}