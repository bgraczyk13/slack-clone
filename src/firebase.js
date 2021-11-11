import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAB3YXkRdYOFmoo0kxxQYDud9PtDGwFCmM",
  authDomain: "slack-clone-62d87.firebaseapp.com",
  projectId: "slack-clone-62d87",
  storageBucket: "slack-clone-62d87.appspot.com",
  messagingSenderId: "1021161502776",
  appId: "1:1021161502776:web:30bdf07f0d77ed65570ecd",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
