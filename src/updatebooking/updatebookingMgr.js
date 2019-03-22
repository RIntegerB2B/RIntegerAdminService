var updatebookingDA = require('./updatebookingDA');


exports.updateBooking = function (req, res) {
    try {
        
        switch(req.body.bookingType) {
            case 'Product Booking':
            updatebookingDA.updateProductBooking(req, res)
              break;


              case 'A+ Cataloging Booking':
            updatebookingDA.updateaplusBooking(req, res)
              break;

              case 'Catalog Booking':
              updatebookingDA.updatecatalogBooking(req, res)
                break;

                case 'Creative Booking':
              updatebookingDA.updatecreativeBooking(req, res)
                break;

                case 'Editing Booking':
              updatebookingDA.updateediteBooking(req, res)
                break;

                case 'IT Services Booking':
              updatebookingDA.updateITBooking(req, res)
                break;

                case 'Marketing Booking':
                updatebookingDA.updatemarketBooking(req, res)
                  break;

                  case 'Registration Booking':
                updatebookingDA.updateregistrationBooking(req, res)
                  break;
                  case 'Account Management Booking':
                  updatebookingDA.updateAccountManagementBooking(req, res)
                    break;
          }
    }

    catch (error) {
        console.log(error);
    }
}