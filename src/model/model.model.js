var mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    userName: String,
    description: String,
    availability: Boolean,
    mobileNumber: String,
    emailId: String,
    faceBook: String,
    whatsapp: String,
    location: String,
    primeImage: String,
    ecommerceImageName: [String],
    productImageName: [String],
    portraitImageName: [String],
    portFolioImageName: [String],
    modelType: String,
    categoryType: String,
    height: String,
    measurements: String,
    shoulder: String,
    shoeSize: String,
    password: String,
    modelId: String,
    serviceProviderId: String,
    serviceProviderName: String,
    serviceProviderCompanyName: String,
    isActive: Boolean,
    isScheduledBooking: Boolean,
    Id: String
});

 const ModelDetail = mongoose.model('model', ModelSchema);
module.exports = ModelDetail;