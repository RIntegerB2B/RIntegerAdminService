var mongoose = require('mongoose');

const AdminAccountSchema = new mongoose.Schema({
    userName: String,
    password: String,
    emailId: String,
    mobileNumber: Number,
    role: Boolean
});

const AdminAccount = mongoose.model('adminAccount', AdminAccountSchema);
module.exports = AdminAccount;