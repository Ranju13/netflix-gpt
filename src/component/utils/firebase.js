// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPWtrM1GQloEsm_kldbY76HxONlEQOZsM",
  authDomain: "netflixgpt-e2d97.firebaseapp.com",
  projectId: "netflixgpt-e2d97",
  storageBucket: "netflixgpt-e2d97.appspot.com",
  messagingSenderId: "989743592220",
  appId: "1:989743592220:web:93f8f11542c7fa7d0d80d9",
  measurementId: "G-C4F3RZ0YSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();