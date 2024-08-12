// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMKNYUd_GG2ZTn67GFPBVYe9s9AfMsYOE",
  authDomain: "exam-fff55.firebaseapp.com",
  projectId: "exam-fff55",
  storageBucket: "exam-fff55.appspot.com",
  messagingSenderId: "478854327951",
  appId: "1:478854327951:web:3c2e36d5fef3f3dd568afa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)