module.exports = {
 /* imageServerPath: 'http://localhost/RInteger/serviceproviders/',
        imageUploadPath: './models/serviceproviders/', */

         /* imageOurWorkServerPath: 'http://localhost/RIntegerWorks/',
  imageOurWorkUploadPath: './ourwork/', */


 /*  adServerPath: 'http://localhost/RIntegerAds',
 adUploadPath: './ads',  */

   imageServerPath: process.env.IMAGE_SERVER_PATH || 'https://rinteger.com/admin/images/',
  imageUploadPath:process.env.IMAGE_UPLOAD_PATH || '/home/ubuntu/app/rinteger-admin/Rinteger-admin/images/' ,
    
 
    imageOurWorkServerPath: process.env.IMAGE_SERVER_PATH || 'https://rinteger.com/admin/images/ourwork/',
    imageOurWorkUploadPath:process.env.IMAGE_UPLOAD_PATH || '/home/ubuntu/rinteger-admin/Rinteger-admin/images/ourwork/' ,

    adServerPath:  'https://rinteger.com/admin/images/ads/',
 adUploadPath: '/home/ubuntu/app/rinteger-admin/Rinteger-admin/images/ads/' ,
    imageUrl: process.env.IMAGE_URL_PATH || 'https://rinteger.com/assets/images/logohomepage.jpg',
    serviceUrl: 'https://rinteger.com/dashboard/statusView/',
    notificationUrl: 'https://rinteger.com/admin/navheader/crmsubscribe'
  }