'use strict';

var contactUsMgr = require('./contactUsMgr');

module.exports = function (app) {

    app.route('/query')
        .get(contactUsMgr.viewQuery);

        app.route('/requesthandled/:id')
        .get(contactUsMgr.requestHandled);


        app.route('/handledrequest')
        .get(contactUsMgr.handledRequest);
}