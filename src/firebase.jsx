import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRx3IL77GjYtOkQWYaX3eJnxilNGhOqVE",
  authDomain: "cu-rizz.firebaseapp.com",
  projectId: "cu-rizz",
  storageBucket: "cu-rizz.appspot.com",
  messagingSenderId: "689877879628",
  appId: "1:689877879628:web:6421d34b5c04df62d21de9",
  measurementId: "G-KN5T8LWDX5"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
