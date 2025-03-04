import {storage} from './config'

export const deleteImage = async (imageUrl) => {
    try {
        const baseUrl = "https://firebasestorage.googleapis.com/v0/b/mern-auth-1c6d8.appspot.com/o/";
        const path = decodeURIComponent(imageUrl.split(baseUrl)[1].split("?")[0]);    
        await storage.bucket().file(path).delete();
        // console.log("Image deleted successfully!");
        return true; 
    } catch (error) {
        // console.error("Error deleting image:", error);
        return false 
    }
};
