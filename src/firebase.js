// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBQRbcCjmZXFtx4MKn2o63u1eyq9d-1hCs",
  authDomain: "front-end-6c228.firebaseapp.com",
  projectId: "front-end-6c228",
  storageBucket: "front-end-6c228.appspot.com",
  messagingSenderId: "225879665272",
  appId: "1:225879665272:web:5b888e758836407b5a1b8d",
  measurementId: "G-G42KET7CH1",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };