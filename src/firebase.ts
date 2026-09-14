
// Import Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgWl1sQ9vCwLw9gML4kmG6PPD68lXp6FM",
  authDomain: "ionic-photogallery-crud.firebaseapp.com",
  databaseURL:
    "https://ionic-photogallery-crud-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ionic-photogallery-crud",
  storageBucket: "ionic-photogallery-crud.firebasestorage.app",
  messagingSenderId: "103833441079",
  appId: "1:103833441079:web:60752351098d1fb7bbc0b2",
  measurementId: "G-KE4K820RZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Realtime Database
export const database = getDatabase(app);

