// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "tasktrek-9b87c.firebaseapp.com",
  projectId: "tasktrek-9b87c",
  storageBucket: "tasktrek-9b87c.appspot.com",
  messagingSenderId: "1037742345647",
  appId: "1:1037742345647:web:254c67b89aca58f014735a",
  measurementId: "G-YB7PJVKE1Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
