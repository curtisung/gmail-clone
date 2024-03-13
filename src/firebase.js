// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT7EhH_4zFN31EXOb9_TjvnqHyJhudgYs",
  authDomain: "clone-curtis.firebaseapp.com",
  projectId: "clone-curtis",
  storageBucket: "clone-curtis.appspot.com",
  messagingSenderId: "906711022269",
  appId: "1:906711022269:web:923a67c20b53771ef6d5d4",
  measurementId: "G-JBPWC12E0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };