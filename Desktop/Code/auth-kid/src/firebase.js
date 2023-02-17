// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBidtu7-850P90T2Mkw7lHSKgst9zkcWok",
  authDomain: "auth-prod-af02a.firebaseapp.com",
  projectId: "auth-prod-af02a",
  storageBucket: "auth-prod-af02a.appspot.com",
  messagingSenderId: "731687049818",
  appId: "1:731687049818:web:3962377a0d80ab56fb9663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app