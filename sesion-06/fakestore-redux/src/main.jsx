import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-HPaNdsRa9t6C2GOfvK8spXB5eQ1-_v8",
  authDomain: "fakestore-talentotech-javiermh.firebaseapp.com",
  projectId: "fakestore-talentotech-javiermh",
  storageBucket: "fakestore-talentotech-javiermh.appspot.com",
  messagingSenderId: "1012906397470",
  appId: "1:1012906397470:web:f6884ee89648dd3fc8830f",
  measurementId: "G-ELBLJL44HF"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
