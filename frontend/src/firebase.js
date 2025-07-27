import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA_aFRmQlhKpMajMkc-BaXfo8QkJ8p5LgE",
  authDomain: "resume-optimizer-90f25.firebaseapp.com",
  projectId: "resume-optimizer-90f25",
  storageBucket: "resume-optimizer-90f25.appspot.com",
  messagingSenderId: "135573871864",
  appId: "1:135573871864:web:709dee4ebb768ed8a32f0d"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);