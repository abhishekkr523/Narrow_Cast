// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYPWP3WyU9KLRMyACBKtd_QCQ-uQ2P5DU",
  authDomain: "narrowcast-aef2f.firebaseapp.com",
  projectId: "narrowcast-aef2f",
  storageBucket: "narrowcast-aef2f.appspot.com",
  messagingSenderId: "244276118744",
  appId: "1:244276118744:web:e7e6c392adb6aceaf003ad",
  measurementId: "G-XX4VCHCD6P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);