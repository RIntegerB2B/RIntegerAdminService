var addBannerMgr = require('./addBanner/addBannerMgr');
var adsImagesMgr = require('./adsImages/adsImagesMgr');

module.exports = function (app) {
  app.route('/banner')
    .post(addBannerMgr.createBanner);
  app.route('/allbannerimage')
        .get(addBannerMgr.findBanner);
  app.route('/bannerDelete/:id')
        .delete(addBannerMgr.deleteBannerImage);


        // ads 

        app.route('/ads')
    .put(adsImagesMgr.createAds);
  app.route('/alladsimage')
        .get(adsImagesMgr.findAds);
  app.route('/adsDelete/:id')
        .delete(adsImagesMgr.deleteAds);
      
}
