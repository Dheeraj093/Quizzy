import {v2 as cloudinary} from "cloudinary";
import fs from 'fs';

cloudinary.config({ 
    cloud_name: "ddxhusgxt",
    api_key: "923487825982985",
    api_secret: "iTzwhKWQ4_IPQWaFQZhmbt2LhLQ"
});

export const uploadOnCloudinary = async(localFilePath) => {
   try {
     if(!localFilePath) return null;
     const response = await cloudinary.uploader.upload(localFilePath,{resource_type:'auto'});
     fs.unlinkSync(localFilePath);
     return response;
   } catch (error) {
      fs.unlinkSync(localFilePath);// remove locally save temp file when uploading failed 
   }
}

