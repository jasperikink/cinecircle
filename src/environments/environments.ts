// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC665DB-XQ6RFBUd8rGAjKxAI5iAeio9Vc",
  authDomain: "cine-circle-cba76.firebaseapp.com",
  projectId: "cine-circle-cba76",
  storageBucket: "cine-circle-cba76.firebasestorage.app",
  messagingSenderId: "519376563738",
  appId: "1:519376563738:web:1559eb54ad307531b4eba3",
  measurementId: "G-2ZY9T04GEB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
