import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBoni2pVilXHrpLrVLpFw_y0QfhOOZwJ9g",
  authDomain: "clone-73507.firebaseapp.com",
  databaseURL: "https://clone-73507.firebaseio.com",
  projectId: "clone-73507",
  storageBucket: "clone-73507.appspot.com",
  messagingSenderId: "150270261471",
  appId: "1:150270261471:web:6d362ea3874a596d20d16a",
  measurementId: "G-R1W32RMF89",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
