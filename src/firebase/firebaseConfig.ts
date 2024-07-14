// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_rsq9xIuDSTlBlP4Yy6n0IhpmFD1qUVQ",
  authDomain: "informatyka-4b6e6.firebaseapp.com",
  projectId: "informatyka-4b6e6",
  storageBucket: "informatyka-4b6e6.appspot.com",
  messagingSenderId: "187016778537",
  appId: "1:187016778537:web:a2e5dd7cc8d10b0e399d38",
  measurementId: "G-Y598Q19L3C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
const storage = getStorage(app);

export { storage };