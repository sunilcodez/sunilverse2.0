// FIREBASE CONFIG

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzGbjstev2XzOQKiTiEjd3Sfk7-pktxb0",
  authDomain: "portfolio-contact-msg.firebaseapp.com",
  projectId: "portfolio-contact-msg",
  storageBucket: "portfolio-contact-msg.firebasestorage.app",
  messagingSenderId: "222141979393",
  appId: "1:222141979393:web:a2d362f1e4a104d6585900"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);