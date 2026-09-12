// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgWl1sQ9vCwLw9gML4kmG6PPD68lXp6FM",
  authDomain: "ionic-photogallery-crud.firebaseapp.com",
  databaseURL: "https://ionic-photogallery-crud-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ionic-photogallery-crud",
  storageBucket: "ionic-photogallery-crud.firebasestorage.app",
  messagingSenderId: "103833441079",
  appId: "1:103833441079:web:60752351098d1fb7bbc0b2",
  measurementId: "G-KE4K820RZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);