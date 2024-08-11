// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiktK5sFvUgLJXM2d2WW7bXe9FNuxr8jQ",
  authDomain: "fir-project-75736.firebaseapp.com",
  projectId: "fir-project-75736",
  storageBucket: "fir-project-75736.appspot.com",
  messagingSenderId: "356811692285",
  appId: "1:356811692285:web:73f236f4199f009d3bc694"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)