// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6nE_VWbixR74qB3G0ijWvXDds9MKtyMA",
  authDomain: "razersgaming-35e3b.firebaseapp.com",
  projectId: "razersgaming-35e3b",
  storageBucket: "razersgaming-35e3b.appspot.com",
  messagingSenderId: "539090292035",
  appId: "1:539090292035:web:2f474a5c08bd50df1273f6",
  measurementId: "G-Y3PWYEQHTQ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)