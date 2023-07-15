// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvOPtYJBZqFMY3zNNcX9VyLewymT-x7Hw",
  authDomain: "photofolio-dda94.firebaseapp.com",
  projectId: "photofolio-dda94",
  storageBucket: "photofolio-dda94.appspot.com",
  messagingSenderId: "422727676095",
  appId: "1:422727676095:web:9c4363e403b898a1b7d60a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);