import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBKq0zIbcRjQQJSgqTI-xbH4ZMJ31r_Pzw",
    authDomain: "miniproject-39cca.firebaseapp.com",
    projectId: "miniproject-39cca",
    storageBucket: "miniproject-39cca.appspot.com",
    messagingSenderId: "746780896705",
    appId: "1:746780896705:web:64ff49fb93400f67d11340",
    measurementId: "G-QDKKSX3X98"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };