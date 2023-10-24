// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNrkrpGq-SPbGlWjJcadywY0xElsc6jUA",
  authDomain: "netflix-a6519.firebaseapp.com",
  projectId: "netflix-a6519",
  storageBucket: "netflix-a6519.appspot.com",
  messagingSenderId: "135187548193",
  appId: "1:135187548193:web:c1c177f45ff54b39ce7b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();