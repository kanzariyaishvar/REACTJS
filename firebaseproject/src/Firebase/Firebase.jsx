// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5vNnciHs_2xLTTyip3oxOfkQ_M4_oqq0",
  authDomain: "myfirebase-61314.firebaseapp.com",
  projectId: "myfirebase-61314",
  storageBucket: "myfirebase-61314.appspot.com",
  messagingSenderId: "844073637774",
  appId: "1:844073637774:web:1bcfe96065c310fc2ff6df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)