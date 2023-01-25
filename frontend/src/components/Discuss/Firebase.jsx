// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvNJexIQ_KvHeEbA-vNtioVhUATnfR1DU",
  authDomain: "discuss-codefest.firebaseapp.com",
  projectId: "discuss-codefest",
  storageBucket: "discuss-codefest.appspot.com",
  messagingSenderId: "759197006977",
  appId: "1:759197006977:web:ef0bbc5d697dbb25402180",
  measurementId: "G-EBC7Q5CHX0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
