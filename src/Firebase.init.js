// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1krsl0_dDREPzDudqngLWHyrUh6NHsxE",
  authDomain: "auth-dae2b.firebaseapp.com",
  projectId: "auth-dae2b",
  storageBucket: "auth-dae2b.firebasestorage.app",
  messagingSenderId: "599367322987",
  appId: "1:599367322987:web:5b6624e37c1ebc1368102e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);