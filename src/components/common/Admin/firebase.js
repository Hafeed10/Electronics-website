// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // ✅ Add this

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq1KewZnpH7G2lcwvYwWXTNFvPLkZ9L6s",
  authDomain: "power-bb4f3.firebaseapp.com",
  projectId: "power-bb4f3",
  storageBucket: "power-bb4f3.firebasestorage.app",
  messagingSenderId: "1072374278637",
  appId: "1:1072374278637:web:b6332eeb7be85d5d959fe4",
  measurementId: "G-XYXY6Z09MR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // ✅ Initialize Firestore

// ✅ Export db for use in other files
export { db };
