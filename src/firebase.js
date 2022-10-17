// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHmuKtUkxQW9q_WnTSLOi5qyOWojqYht8",
  authDomain: "fir-auth-f5527.firebaseapp.com",
  projectId: "fir-auth-f5527",
  storageBucket: "fir-auth-f5527.appspot.com",
  messagingSenderId: "946317098371",
  appId: "1:946317098371:web:5f239723f91076fabe8ab6",
  measurementId: "G-ZX5FT6EJKH"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
// const db = getFirestore(app);

export {auth}