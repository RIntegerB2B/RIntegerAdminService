var mongoose = require('mongoose');

const UserRegisterSchema = new mongoose.Schema({
    userName: String,
    password: String,
    mobileNumber: Number,
    emailId: String,
    location: String,
    role: String,
    isActive: Boolean
});
const UserRegisterDetails = mongoose.model('userregister', UserRegisterSchema);
module.exports = UserRegisterDetails;