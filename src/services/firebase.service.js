import { storage } from "./../configs/firebase.config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { generateRandomString } from "./../helpers/file.helpers";

export const uploadFileSvc = async (/** @type {any} */ file) => {
  try {
    const randomFileName = generateRandomString(10);
    const fileExtension = file.name.split(".").pop();
    const storageRef = ref(
      storage,
      `showroomai/${randomFileName + "." + fileExtension}`
    );
    //   const resizedImage = await resizeImage(file);
    const uploadTask = uploadBytesResumable(storageRef, file);
    return new Promise((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Handle progress events
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(progress);
        },
        (error) => {
          reject(error);
        },
        async () => {
          try {
            const url = await getDownloadURL(storageRef);
            resolve(url);
          } catch (error) {
            reject(error);
          }
        }
      );
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
export const deleteFileSvc = (/** @type {string} */ filename) => {
  const fileRef = ref(storage, "showroomai/" + filename);
  deleteObject(fileRef);
};
