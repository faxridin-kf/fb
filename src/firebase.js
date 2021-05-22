// npm install -g firebase-tools
// firebase login
// firebase init
// firebase deploy
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPAPxYNKMVp5kNX5VgW0lQMcZ2DVA6omc",
  authDomain: "fbclon-cbff1.firebaseapp.com",
  projectId: "fbclon-cbff1",
  storageBucket: "fbclon-cbff1.appspot.com",
  messagingSenderId: "334819479496",
  appId: "1:334819479496:web:403568c425ae38310dbafd",
  measurementId: "G-RCT2YK9T97"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export {auth, provider}
export default db