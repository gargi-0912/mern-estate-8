// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TOD0: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-58c22.firebaseapp.com",
  projectId: "mern-estate-58c22",
  storageBucket: "mern-estate-58c22.appspot.com",
  messagingSenderId: "858960409327",
  appId: "1:858960409327:web:1dce2452700a0d9611211a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);