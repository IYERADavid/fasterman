// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAj_SnJZzNicg_qrMYNopelW2X58yVXURk",
  authDomain: "fasterman-b6b3f.firebaseapp.com",
  projectId: "fasterman-b6b3f",
  storageBucket: "fasterman-b6b3f.appspot.com",
  messagingSenderId: "107385041842",
  appId: "1:107385041842:web:ab6d775b10342abbce6aab",
  measurementId: "G-1FD40P682K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
