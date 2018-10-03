var subscribeMgr = require('./subscribeMgr');

module.exports = function (app) {

    app.route('/serviceprovidersubscribe')
                .post(subscribeMgr.addPushSubscriber);
}