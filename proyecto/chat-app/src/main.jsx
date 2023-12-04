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
  apiKey: "AIzaSyDEEyr0Y4nthhMVCy31QpF4lO8ETcE5818",
  authDomain: "chat-app-javiermh.firebaseapp.com",
  projectId: "chat-app-javiermh",
  storageBucket: "chat-app-javiermh.appspot.com",
  messagingSenderId: "2204312841",
  appId: "1:2204312841:web:6d5b5875a311ec0f7d1fd8",
  measurementId: "G-0J6D2TQ8XS"
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
