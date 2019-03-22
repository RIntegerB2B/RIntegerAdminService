var cancelledbookingDA = require('./cancelledbookingDA')

exports.cancelBooking = function (req, res) {
    try {
        
        switch(req.body.bookingType) {
            case 'Product Booking':
            cancelledbookingDA.cancelProductBooking(req, res)
              break;


              case 'A+ Cataloging Booking':
              cancelledbookingDA.cancelaplusBooking(req, res)
              break;

              case 'Catalog Booking':
              cancelledbookingDA.cancelcatalogBooking(req, res)
                break;

                case 'Creative Booking':
                cancelledbookingDA.cancelcreativeBooking(req, res)
                break;

                case 'Editing Booking':
                cancelledbookingDA.cancelediteBooking(req, res)
                break;

                case 'IT Services Booking':
                cancelledbookingDA.cancelITBooking(req, res)
                break;

                case 'Marketing Booking':
                cancelledbookingDA.cancelmarketBooking(req, res)
                  break;

                  case 'Registration Booking':
                  cancelledbookingDA.cancelregistrationBooking(req, res)
                  break;

                  case 'Account Management Booking':
                  cancelledbookingDA.cancelAccountManagementBooking(req, res)
                  break;


          }
    }

    catch (error) {
        console.log(error);
    }
}