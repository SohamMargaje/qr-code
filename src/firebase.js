// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXGxoDvkaZfMvPICwr9T3O2kx9I7a4KSQ",
  authDomain: "qr-lost-found-99ee1.firebaseapp.com",
  projectId: "qr-lost-found-99ee1",
  storageBucket: "qr-lost-found-99ee1.firebasestorage.app",
  messagingSenderId: "828219744718",
  appId: "1:828219744718:web:019b6c52d255db270d0b9f",
  measurementId: "G-8CZY1PMLE0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and export it
export const db = getFirestore(app);
