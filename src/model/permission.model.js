var mongoose = require('mongoose');

const RolePermssionSchema = new mongoose.Schema({
    role: String,
    currentDate: String,
    mainMenuPermission: [{
        productBookingMgmt: Boolean,
        digitalBusinessMgmt: Boolean,
        itServicesBookingMgmt: Boolean,
        modelMgmt: Boolean,
        databaseMgmt: Boolean,
        marketingMgmt: Boolean,
        userMgmt: Boolean
    }],
    menuPermission: [{
        scheduledModel: Boolean,
        productShoot: Boolean,
        modelShoot: Boolean,
        creativeShoot: Boolean,
        imageEditing: Boolean,
        registrationSetup: Boolean,
        catalogingListing: Boolean,
        marketingServices: Boolean,
        accountMgmt: Boolean,
        aplusCataloging: Boolean,
        itServices: Boolean,
        addModel: Boolean,
        viewModel: Boolean,
        customerDB: Boolean,
        marketingDB: Boolean,
        upload: Boolean,
        bulkPushNotification: Boolean,
        whatsapp: Boolean,
        subscribe: Boolean,
        permission: Boolean,
        register: Boolean
    }],
});
const RolePermssionDetail = mongoose.model('userpermission', RolePermssionSchema);
module.exports = RolePermssionDetail;