const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,   // ✅ Correct key name
    api_key: process.env.CLOUDINARY_KEY,             // ✅ Correct key name
    api_secret: process.env.CLOUDINARY_SECRET        // ✅ Correct key name
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'WanderLust_DEV',
        allowed_formats: ["png", "jpg", "jpeg"]       // ✅ Correct key: allowed_formats (not allowedFormate)
    }
});

module.exports = {
    cloudinary,
    storage
};
