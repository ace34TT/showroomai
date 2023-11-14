import { auth, firestore, storage } from "./../configs/firebase.config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { generateRandomString } from "./../helpers/file.helpers";
import { signOut } from "firebase/auth";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";

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
//
export const signUpUserSvc = async (/** @type {string} */ uid) => {
  try {
    const docRef = await addDoc(collection(firestore, "access"), {
      uid: uid,
      credits: 3,
    });
    return {
      _id: docRef.id,
      uid: uid,
      credits: 3,
    };
  } catch (error) {
    console.log(error.message);
    throw new Error(error.message);
  }
};
export const signInUserSvc = async (/** @type {unknown} */ uid) => {
  try {
    const q = query(collection(firestore, "access"), where("uid", "==", uid));
    const querySnapshot = await getDocs(q);
    const access = querySnapshot.docs[0];

    return {
      _id: access.id,
      uid: uid,
      credits: access.data().credits,
    };
  } catch (error) {
    console.log(error.message);
    switch (error.message) {
      case "Firebase: Error (auth/invalid-login-credentials).":
        throw new Error("Wrong credentials , Please try again ! ");
      default:
        break;
    }
  }
};
export const signOutUserSvc = () => {
  signOut(auth);
};
export const updateTokenSvc = async (
  /** @type {string} */ docId,
  /** @type {any} */ credit
) => {
  try {
    const docRef = doc(firestore, "access", docId);
    await updateDoc(docRef, {
      credits: credit,
    });
    console.log("Document successfully updated!");
  } catch (error) {
    throw new Error(error.message);
  }
};
