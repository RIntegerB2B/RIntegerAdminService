
var CustomerDetail = require('../../model/customerDetail.model');
var SubscribeDetail = require('../../model/notification.model');
exports.onlySubscribed = function (req, res) {
    SubscribeDetail.aggregate([
        {
          
           $lookup:
           {
               "from": "customerdetails",
               "localField": "mobileNumber",
               "foreignField": "mobileNumber",
               "as": "joinedtable" 
            
           },
        },{
            $match: { "joinedtable": { $eq: [] } } 
        }
        ]).exec(function (err, subscribed) { 
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                })
} else {
    res.status(200).json(subscribed);
}
         })  
}


exports.notSubscribed = function (req, res) {
    CustomerDetail.aggregate([
        {
           $lookup:
           {
               "from": "notifications",
               "localField": "mobileNumber",
               "foreignField": "mobileNumber",
               "as": "joinedtable" 
            
           },
        },{
            $match: { "joinedtable": { $eq: [] } } 
        }
        ]).exec(function (err, subscribed) { 
            if (err) {
                res.status(500).send({
                    message: "Some error occurred while retrieving notes."
                })
} else {
    res.status(200).json(subscribed);
}
        })
}

exports.deleteSubscribedNumber = function (req, res) {
    SubscribeDetail.findOneAndRemove({'_id':req.params.id}, function (err) {
        if (err) {
            res.status(500).send({
                "result": 0
            });
        } else {
            SubscribeDetail.find({}, function (err, details) {
                if(err) {
                    res.status(500).send({
                        "result" : 0
                    })
                } 
                else {
                    res.status(200).json(details)
                }
            })
        }
    });
}
