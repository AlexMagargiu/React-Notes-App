import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChbsHy1OonOI5AbPyqVKDWcbf2rXGf2AQ",
  authDomain: "react-notes-73d52.firebaseapp.com",
  projectId: "react-notes-73d52",
  storageBucket: "react-notes-73d52.appspot.com",
  messagingSenderId: "955227693149",
  appId: "1:955227693149:web:d91d14ff3873147d9eadb4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
