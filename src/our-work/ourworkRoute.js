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

    app.route('/categoryDelete/:categoryId/name/:name')
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

        app.route('/primeimage/:main/subcat/:subid/cat/:catid/mainname/:name/subname/:sub/catname/:cat')
        .put(addPortfolioMgr.editPrimeImage);

        app.route('/maincategory/:main/subcategory/:sub/category/:cat')
        .put(addPortfolioMgr.createCategory);

        app.route('/categorydetails')
        .get(addPortfolioMgr.showCategory);

        app.route('/supercat/:super/maincat/:main/details')
        .get(addPortfolioMgr.showMainCategory);

        app.route('/supercat/:super/maincat/:main/category/:cat/details')
        .get(addPortfolioMgr.categoryDetails);

        app.route('/super/:super/main/:main/cat/:cat/supid/:supid/mainid/:mainid/catid/:catid')
        .put(addPortfolioMgr.categoryImages);  // add mulitple images

        app.route('/supercat/:super/maincat/:main/category/:cat/imagename/:images')
        .get(addPortfolioMgr.saveImages);
 
        app.route('/supercat/:super/maincat/:main/category/:cat/multiimages')
        .get(addPortfolioMgr.viewMulitpleImages);  // view multiple images

        app.route('/supercat/:super/maincat/:main/category/:cat/image/:image')
        .delete(addPortfolioMgr.deleteMulitpleImage);

        app.route('/supercat/:super/maincat/:main/category/:cat')
        .delete(addPortfolioMgr.deleteCategory); // delete category


}