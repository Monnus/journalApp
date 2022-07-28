// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzQRm-8bI3WsRVaPK7wP9kKBTSADmlR-E",
  authDomain: "journal-dev-68458.firebaseapp.com",
  projectId: "journal-dev-68458",
  storageBucket: "journal-dev-68458.appspot.com",
  messagingSenderId: 921747715409,
  appId: "1:921747715409:web:4ef30aae8301af9ccc0f70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;