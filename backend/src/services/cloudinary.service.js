const cloudinary = require('../config/cloudinary');

const uploadFile = async (filePath, folder = 'angel_ai') => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: 'auto', // Auto-detects image, video, audio
    });
    return result;
  } catch (error) {
    throw new Error('Cloudinary upload failed: ' + error.message);
  }
};

const deleteFile = async (publicId) => {
  try {
    const result = await cloudinary.uploader.destroy(publicId);
    return result;
  } catch (error) {
    throw new Error('Cloudinary delete failed: ' + error.message);
  }
};

module.exports = {
  uploadFile,
  deleteFile,
};
