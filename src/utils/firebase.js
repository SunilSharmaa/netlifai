// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeEGqCYDYeuSG2ta7erN5KN84nCWp9EE4",
  authDomain: "netlifai.firebaseapp.com",
  projectId: "netlifai",
  storageBucket: "netlifai.firebasestorage.app",
  messagingSenderId: "243538201371",
  appId: "1:243538201371:web:fb448808d928a32acd21be",
  measurementId: "G-BLNDFWCC02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;