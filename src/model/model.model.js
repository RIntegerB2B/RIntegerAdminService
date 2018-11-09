var mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
    userName: String,
    description: String,
    availability: String,
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
    bust: String,
    chest: String,
    waist: String,
    hips: String,
    hair: String,
    eyes: String,
    shoulder: String,
    shoeSize: String,
    topsize: String,
    bottomsize: String,
    password: String,
    modelId: String,
    serviceProviderId: String,
    serviceProviderName: String,
    serviceProviderCompanyName: String,
    isActive: Boolean,
    isScheduledBooking: Boolean,
    Id: String,
    scheduledDate: String
});

 const ModelDetail = mongoose.model('model', ModelSchema);
module.exports = ModelDetail;