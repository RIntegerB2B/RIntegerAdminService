var digtalManagementStatusDA = require('./digitalManagementStatusDA');

exports.addMonth = function(req,res) {
    try{
        digtalManagementStatusDA.addMonth(req,res)
    }
    catch(error) {
        console.log(error);
    }
}

exports.viewMonthlyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.viewMonthlyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.addMonthlyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.addMonthlyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.editMonthlyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.editMonthlyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.deleteMonthlyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.deleteMonthlyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.updateMonthlyStatus = function(req,res) {
    try{
        digtalManagementStatusDA.updateMonthlyStatus(req,res)
    }
    catch(error) {
        console.log(error);
    }
}

exports.copyMonthlyPlanToWeekly = function(req,res) {
    try{
        digtalManagementStatusDA.copyMonthlyPlanToWeekly(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.addWeeklyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.addWeeklyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
} 
exports.viewWeeklyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.viewWeeklyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
} 
exports.viewAllWeeklyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.viewAllWeeklyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
} 

exports.deleteWeeklyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.deleteWeeklyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}


exports.editWeeklyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.editWeeklyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.copyWeeklyPlanToDaily = function(req,res) {
    try{
        digtalManagementStatusDA.copyWeeklyPlanToDaily(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.updateWeeklyStatus = function(req,res) {
    try{
        digtalManagementStatusDA.updateWeeklyStatus(req,res)
    }
    catch(error) {
        console.log(error);
    }
}

exports.addDailyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.addDailyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.editDailyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.editDailyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.deleteDailyPlan = function(req,res) {
    try{
        digtalManagementStatusDA.deleteDailyPlan(req,res)
    }
    catch(error) {
        console.log(error);
    }
}
exports.updateDailyStatus = function(req,res) {
    try{
        digtalManagementStatusDA.updateDailyStatus(req,res)
    }
    catch(error) {
        console.log(error);
    }
}



