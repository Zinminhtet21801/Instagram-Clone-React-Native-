import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDyUkwcFo_uCiCXRls8pDB4OkvwDFnREBI",
  authDomain: "react-native-instagram-c-bf860.firebaseapp.com",
  projectId: "react-native-instagram-c-bf860",
  storageBucket: "react-native-instagram-c-bf860.appspot.com",
  messagingSenderId: "907589492589",
  appId: "1:907589492589:web:9be1fedb9e4f9c1f244464",
  measurementId: "G-5SRVBKKM8N"
};


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };

const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
