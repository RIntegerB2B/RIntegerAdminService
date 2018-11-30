module.exports = {
/*  imageServerPath: 'http://localhost/RInteger/serviceproviders/',
        imageUploadPath: './models/serviceproviders/' ,*/
   imageServerPath: process.env.IMAGE_SERVER_QA_PATH || 'https://rinteger.com/qa/admin/images/',
  imageUploadPath:process.env.IMAGE_UPLOAD_QA_PATH || '/home/ubuntu/qa/rinteger-admin/Rinteger-admin/images/' ,
    
  /*   workServerPath: 'http://localhost/RIntegerWorks/',
    workUplaodPath: './ourwork/', */
    imageOurWorkServerPath: process.env.IMAGE_SERVER_PATH || 'https://rinteger.com/qa/admin/images/ourwork/',
    imageOurWorkUploadPath:process.env.IMAGE_UPLOAD_PATH || '/home/ubuntu/qa/rinteger-admin/Rinteger-admin/images/ourwork/' ,
    imageUrl: process.env.IMAGE_URL_PATH || 'https://rinteger.com/qa/assets/images/logohomepage.jpg',
    serviceUrl: 'https://rinteger.com/qa/dashboard/statusView/',
    notificationUrl: 'https://rinteger.com/qa/admin/navheader/analysis'
  };