// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLPYRRG20eim2JFLo4GEY8997TG2I7hfk",
  authDomain: "learning-firebase-27c0f.firebaseapp.com",
  projectId: "learning-firebase-27c0f",
  storageBucket: "learning-firebase-27c0f.firebasestorage.app",
  messagingSenderId: "680167104628",
  appId: "1:680167104628:web:6afe231fb8719155733121",
  measurementId: "G-XJKF35SWV2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
