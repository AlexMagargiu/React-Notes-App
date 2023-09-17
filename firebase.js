import { initializeApp } from "firebase/app";
import {collection, getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyAjzPqvnjw1bDC94eEM0muhUu4HCel5dhI",
  authDomain: "react-notes-92d92.firebaseapp.com",
  projectId: "react-notes-92d92",
  storageBucket: "react-notes-92d92.appspot.com",
  messagingSenderId: "763441554694",
  appId: "1:763441554694:web:cb84118d2b56ac69d6aa87"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const notesCollection = collection(db, "notes")