import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB33XB_Pbo5aNtGE-IX6oxEtQ3RdZB3PSA",
  authDomain: "twitter-clone-d4b4c.firebaseapp.com",
  databaseURL: "https://twitter-clone-d4b4c.firebaseio.com",
  projectId: "twitter-clone-d4b4c",
  storageBucket: "twitter-clone-d4b4c.appspot.com",
  messagingSenderId: "990383662693",
  appId: "1:990383662693:web:6ed51b16814161e953088c",
  measurementId: "G-42M8HDR9R2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
