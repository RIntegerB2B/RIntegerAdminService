var addBannerMgr = require('./addBanner/addBannerMgr');


module.exports = function (app) {
  app.route('/banner')
    .post(addBannerMgr.createBanner);
  app.route('/allbannerimage')
        .get(addBannerMgr.findBanner);
  app.route('/bannerDelete/:id')
        .delete(addBannerMgr.deleteBannerImage);
      
}
