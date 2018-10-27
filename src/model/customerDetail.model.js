var mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    mobileNumber: Number,
    name: String,
    emailId: String,
    location: String,
    bookingType: [String],
    shootType: [String],
    modelType: [String],
    product: [String],
    companyAddress: String,
    location: String,
    gstNumber: String,
    customerGrade: String,
    brandName: String,
});

const CustomerDetail = mongoose.model('customerDetail', CustomerSchema);
module.exports = CustomerDetail;