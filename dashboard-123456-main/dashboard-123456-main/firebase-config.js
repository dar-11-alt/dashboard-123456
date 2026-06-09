// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHuiriR43mVWwOb7u92TdmbCoQU-weLYQ",
  authDomain: "dashboard-6d4fc.firebaseapp.com",
  projectId: "dashboard-6d4fc",
  storageBucket: "dashboard-6d4fc.firebasestorage.app",
  messagingSenderId: "415408574366",
  appId: "1:415408574366:web:c6b1304b555d5c386e508f",
  measurementId: "G-5TV82C41KZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);