
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,} from "firebase/auth"
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC8qdJ7fY8JBZxS-Or_UolOnKvlxs-Qqso",
  authDomain: "restaurant-app-e0296.firebaseapp.com",
  projectId: "restaurant-app-e0296",
  storageBucket: "restaurant-app-e0296.appspot.com",
  messagingSenderId: "742082094024",
  appId: "1:742082094024:web:4e36a20804f38b11ec96fd",
  measurementId: "G-6S1X95TDJP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app);

export {auth,db};

