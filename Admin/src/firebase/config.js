import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYDutOpYmvBL2jAKHy8vXqmFuPkClo87g",
  authDomain: "mern-auth-1c6d8.firebaseapp.com",
  projectId: "mern-auth-1c6d8",
  storageBucket: "mern-auth-1c6d8.appspot.com",
  messagingSenderId: "312459296685",
  appId: "1:312459296685:web:3b9c0756dc4f5e5bc8ab24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);