import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/style.scss'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartContextProvider } from './cartContextProvider';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8svx2vFz1macoJ6Zrwr4Vsk6hM6bZPZo",
  authDomain: "coderhouse-jsc.firebaseapp.com",
  projectId: "coderhouse-jsc",
  storageBucket: "coderhouse-jsc.appspot.com",
  messagingSenderId: "698530425696",
  appId: "1:698530425696:web:98f520647b28b325724c05"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <App />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
