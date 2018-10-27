var mongoose = require('mongoose');


var MarketCustomerSchema = new mongoose.Schema({
    customerName: String,
    mobileNumber: String,
    whatsAppNo: String,
    landLine: String,
    email: String,
    location: String,
}); 

const MarketCustomer = mongoose.model('marketcustomer', MarketCustomerSchema);
module.exports = MarketCustomer;