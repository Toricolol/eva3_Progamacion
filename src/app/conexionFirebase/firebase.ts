import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7jVF8Pjgz9_ntOPravP72TslqXMZmvww",
  authDomain: "eva4-a40ad.firebaseapp.com",
  projectId: "eva4-a40ad",
  storageBucket: "eva4-a40ad.appspot.com",
  messagingSenderId: "929952618813",
  appId: "1:929952618813:web:a2e4009d58aeae14a70d54",
  measurementId: "G-MFYL901YWV"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
