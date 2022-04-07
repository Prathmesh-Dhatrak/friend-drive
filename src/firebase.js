import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// replace keys here
const firebaseConfig = {
  apiKey: "AIzaSyB8sU7Ea5WntCpRoy2kJp_sotzUZAFmca8",
  authDomain: "friend-drive.firebaseapp.com",
  projectId: "friend-drive",
  storageBucket: "friend-drive.appspot.com",
  messagingSenderId: "1054844335156",
  appId: "1:1054844335156:web:7d4fb8765af0b4b8abc661"
};

initializeApp(firebaseConfig);

export const db = getFirestore();
export const storage = getStorage();
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
