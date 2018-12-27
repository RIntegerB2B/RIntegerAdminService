'use strict';
var superCategoryVideoMgr = require('./super-category-video/superCategoryVideoMgr');
var mainCategoryVideoMgr = require('./main-category-video/mainCategoryVideoMgr');
var addVideoPortfolioMgr = require('./add-videos/addVideoMgr');

module.exports = function (app) {

    app.route('/addVideoCategory')
        .post(superCategoryVideoMgr.superCategoryInsert);

    app.route('/videoCategoryDetails')
        .get(superCategoryVideoMgr.superCategoryShow);


    app.route('/videocategory/:id')
        .put(superCategoryVideoMgr.superCategoryEdit);

    app.route('/videoCategoryDelete/:categoryId/name/:name')
        .delete(superCategoryVideoMgr.superCategoryDelete);

        
    app.route('/videoSuperCategory')
    .get(mainCategoryVideoMgr.showSuperCategory);

    app.route('/mainCategoryDetails')
        .get(mainCategoryVideoMgr.mainCategoryShow);

    app.route('/videomainCategory')
        .post(mainCategoryVideoMgr.mainCategoryInsert);

    app.route('/category/:categoryId/videomainCategory/:mainCategoryId')
        .delete(mainCategoryVideoMgr.mainCategoryDelete);

    app.route('/category/:categoryId/videomainCategory/:mainCategoryId')
        .put(mainCategoryVideoMgr.mainCategoryUpdate);



    app.route('/videoSuperCategorydetail/:id')
        .get(mainCategoryVideoMgr.getMainCategory);

    app.route('/categoryData/:id')
        .get(mainCategoryVideoMgr.getCategory);

    app.route('/videoMainCategoryData')
        .get(addVideoPortfolioMgr.mainCategoryData);

    app.route('/videoMainCategoryOnSub/:id')
        .get(addVideoPortfolioMgr.mainCategoryOnSub);

        app.route('/primeimage/:main/subcat/:sub/cat/:cat')
        .put(addVideoPortfolioMgr.createPrimeImage);

        app.route('/primeimage/:main/subcat/:subid/cat/:catid/mainname/:name/subname/:sub/catname/:cat')
        .put(addVideoPortfolioMgr.editPrimeImage);

        app.route('/maincategory/:main/subcategory/:sub/videocategory/:cat')
        .put(addVideoPortfolioMgr.createCategory);

        app.route('/categorydetails')
        .get(addVideoPortfolioMgr.showCategory);

        app.route('/supercat/:super/maincat/:main/videodetails')
        .get(addVideoPortfolioMgr.showMainCategory);

        app.route('/supercat/:super/maincat/:main/category/:cat/details')
        .get(addVideoPortfolioMgr.categoryDetails);


        app.route('/supercat/:super/maincat/:main/category/:cat/imagename/:images')
        .get(addVideoPortfolioMgr.saveVideo);
 

        app.route('/supercat/:super/maincat/:main/videocategory/:cat')
        .delete(addVideoPortfolioMgr.deleteCategory); // delete category


}