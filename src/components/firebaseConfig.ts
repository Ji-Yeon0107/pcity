import { initializeApp } from 'firebase/app';
import React from 'react';


const firebaseConfig = {
    apiKey: "AIzaSyC6i-DP91qoNX5FZxNoiigwgcD6RvBO-to",
    authDomain: "p-city-9b068.firebaseapp.com",
    projectId: "p-city-9b068",
    storageBucket: "p-city-9b068.appspot.com",
    messagingSenderId: "351520531057",
    appId: "1:351520531057:web:2b2f60639315c9e82331d0",
    measurementId: "G-REE1ZLM4RJ"
  };
  const app = initializeApp(firebaseConfig)
  export default firebaseConfig;