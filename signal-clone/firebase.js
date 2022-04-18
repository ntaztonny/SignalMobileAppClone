import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDGXbna2EZnO-KMjsfWRByTYVfuuNmXHYQ",
  authDomain: "signal-clone-cfbc2.firebaseapp.com",
  projectId: "signal-clone-cfbc2",
  storageBucket: "signal-clone-cfbc2.appspot.com",
  messagingSenderId: "479751784373",
  appId: "1:479751784373:web:74402f14e7a054fe32fbfc",
};

let app = initializeApp(firebaseConfig);

const db = getFirestore();
const auth = getAuth();

export { db, auth };
