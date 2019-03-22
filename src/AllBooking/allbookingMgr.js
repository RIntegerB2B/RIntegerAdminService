var allbookingDA = require ('./allbookingDA');

exports.allbooking = function(req,res) {
    try {
        allbookingDA.allbooking(req,res);
    } catch(error){
        console.log(error);
    }

} 

exports.allApproved = function(req,res) {
    try {
        allbookingDA.allApproved(req,res);
    } catch(error){
        console.log(error);
    }

} 

exports.allCancelled = function(req,res) {
    try {
        allbookingDA.allCancelled(req,res);
    } catch(error){
        console.log(error);
    }

} 
