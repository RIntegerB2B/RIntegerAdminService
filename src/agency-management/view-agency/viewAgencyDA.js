var Agency = require('../../model/agency.model');

exports.findAgency = function (req, res) {
    Agency.find({'isActive': 0
}).select('-password').exec(function (err, agency) {
    if (err) {
        res.status(500).send({
            message: "Some error occurred while retrieving notes."
        });
    } else {
       
        res.status(200).json(agency);
    }
});
}
