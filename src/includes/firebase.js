import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZT3NBPnBibP-aXhssDeKYu-DQeXbsioE",
  authDomain: "music-king-2bdc5.firebaseapp.com",
  projectId: "music-king-2bdc5",
  storageBucket: "music-king-2bdc5.appspot.com",
  appId: "1:1093896768788:web:6095cd6309d5dc2938c601",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection("users");

export { auth, db, usersCollection };
