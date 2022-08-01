// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAmRzyicEWz_vCM3PUV_MkPefOMxkRlIpo",
  authDomain: "mydev-journal.firebaseapp.com",
  projectId: "mydev-journal",
  storageBucket: "mydev-journal.appspot.com",
  messagingSenderId: "828013067072",
  appId: "1:828013067072:web:d3a38c4e015fcb2441d8a5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;