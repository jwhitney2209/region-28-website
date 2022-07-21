// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1VVuK4Mz3c_DfizcqaB0_AtpvryEzIGQ",
  authDomain: "region28vocal-68ae6.firebaseapp.com",
  projectId: "region28vocal-68ae6",
  storageBucket: "region28vocal-68ae6.appspot.com",
  messagingSenderId: "715038442055",
  appId: "1:715038442055:web:dde3e1227b25fcb4ec2762",
  measurementId: "G-40J0GQLRHS"
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore()

export { db }