/* eslint-disable linebreak-style */
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALW4RgAQ894fpWpZ-nJ9Ury0cMSxA0QbU",
  authDomain: "photoroomai.firebaseapp.com",
  projectId: "photoroomai",
  storageBucket: "photoroomai.appspot.com",
  messagingSenderId: "517721969487",
  appId: "1:517721969487:web:c499838abe135c1afeab3a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
//

const provider = new GoogleAuthProvider();

export { auth, firestore, storage, provider };
