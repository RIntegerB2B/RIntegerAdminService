
var CustomerDetail = require('../../model/customerDetail.model');
var SubscribeDetail = require('../../model/notification.model');

exports.onlySubscribed = function (req, res) {
    SubscribeDetail.aggregate([
        {
          
           $lookup:
           {
               "from": "customerDetail",
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