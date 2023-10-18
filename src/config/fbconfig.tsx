// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNuBTNQVqLnVhBgQQzZ2-Xt0Zd11rupuU",
  authDomain: "lmsproject-62c3a.firebaseapp.com",
  projectId: "lmsproject-62c3a",
  storageBucket: "lmsproject-62c3a.appspot.com",
  messagingSenderId: "692056840586",
  appId: "1:692056840586:web:4f69236d4394b8b7ccd073",
  measurementId: "G-XDV8XQ1MDZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

