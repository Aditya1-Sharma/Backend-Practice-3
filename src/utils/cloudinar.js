import { v2 as cloudinary } from "cloudinary";
import { response } from "express";
import fs from "fs";
(async function () {
  // Configuration
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET, // Click 'View Credentials' below to copy your API secret
  });

  // Upload an image

  const uploadOnCloudinary = async (localFilePath) => {
    try {
      if (!localFilePath) return null;

      const uploadResult = await cloudinary.uploader.upload(localFilePath, {
        resource_type: "auto",
      });
      // file has been successfull uploaded
      console.log(uploadResult.url);
      return uploadResult;
    } catch (error) {
      // Remove the locally saved temporary file as the upload operation
      fs.unlinkSync(localFilePath);
      return null;
    }
  };
})();
