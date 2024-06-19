// src/firebase/init.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLQxtemHKWrg359CJ1HzZLz_FKwd9To1M",
  authDomain: "birthday-88ff4.firebaseapp.com",
  projectId: "birthday-88ff4",
  storageBucket: "birthday-88ff4.appspot.com",
  messagingSenderId: "642015507456",
  appId: "1:642015507456:web:7606c30d777569a66dd4e5",
  measurementId: "G-QNSMK1LE2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };





