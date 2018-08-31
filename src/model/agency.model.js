var mongoose = require('mongoose');


const AgencySchema = new mongoose.Schema({
    Id: String,
    userName: String,
    companyName: String,
    emailId: String,
    mobileNumber: Number,
    website: String,
    location: String,
    password: String,
    isActive: Boolean
    
    
});

const AgencyDetailSchema = mongoose.model('agency', AgencySchema);
module.exports = AgencyDetailSchema;