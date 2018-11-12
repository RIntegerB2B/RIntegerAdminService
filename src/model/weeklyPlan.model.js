var mongoose = require('mongoose');

const WeeklyPlanSchema = new mongoose.Schema({
    status: String,
    week:String,
    planTitle: String,
    planDescription: String,
    monthId: String
   
});
module.exports = WeeklyPlanSchema;