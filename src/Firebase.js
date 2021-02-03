import firebase from "firebase";

var firebaseApp = firebase.default.initializeApp({
  apiKey: "AIzaSyA-E4L58-ipObldIhudDG2KMjTg157diFg",
  authDomain: "agilfence-backend.firebaseapp.com",
  databaseURL: "https://agilfence-backend-default-rtdb.firebaseio.com",
  projectId: "agilfence-backend",
  storageBucket: "agilfence-backend.appspot.com",
  messagingSenderId: "495963668407",
  appId: "1:495963668407:web:c83236a9118d79e0a6b232"
});

var db = firebaseApp.firestore();

export { db };
