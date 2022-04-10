// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRo_-EXXVwZmabjEo5XDImqV9qsksWanM",
  authDomain: "emazone-simple.firebaseapp.com",
  projectId: "emazone-simple",
  storageBucket: "emazone-simple.appspot.com",
  messagingSenderId: "101074017055",
  appId: "1:101074017055:web:ec3cd5781c7cc0e4746e2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
