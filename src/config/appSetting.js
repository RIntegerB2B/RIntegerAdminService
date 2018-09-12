module.exports = {
     //   imageServerPath: 'http://localhost/RInteger/serviceproviders/',
 imageServerPath: process.env.IMAGE_SERVER_PATH || 'https://rinteger.com/admin/images/',
   //    imageUploadPath: './models/serviceproviders/',
    imageUploadPath:process.env.IMAGE_UPLOAD_PATH || '/home/ubuntu/app/rinteger-admin/Rinteger-admin/images/',
   imageUrl: process.env.IMAGE_URL_PATH || 'https://rinteger.com/assets/images/logohomepage.jpg'
      
 }