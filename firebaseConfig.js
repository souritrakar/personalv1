
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCctIkLTWseW0R6sh6Gu7GI03AODTpNkBs",
  authDomain: "personal-blog-d7f4a.firebaseapp.com",
  projectId: "personal-blog-d7f4a",
  storageBucket: "personal-blog-d7f4a.appspot.com",
  messagingSenderId: "565627641849",
  appId: "1:565627641849:web:79af849827fa7d692a6728"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)
