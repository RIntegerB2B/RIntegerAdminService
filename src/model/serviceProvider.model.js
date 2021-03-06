var mongoose = require('mongoose');
var Models= require('./model.model');

const ServiceProviderSchema = new mongoose.Schema({
    Id: String,
    userName: String,
    companyName: String,
    emailId: String,
    mobileNumber: Number,
    website: String,
    location: String,
    password: String,
    role: String,
    isActive: Boolean,
    tokenKey: String
});

const ServiceProviderDetailSchema = mongoose.model('serviceProvider', ServiceProviderSchema);
module.exports = ServiceProviderDetailSchema;