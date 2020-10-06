import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBz1FdEQ6k5SUCjf5qrF41zBKjDFZy1dW4",
  authDomain: "clone-35c64.firebaseapp.com",
  databaseURL: "https://clone-35c64.firebaseio.com",
  projectId: "clone-35c64",
  storageBucket: "clone-35c64.appspot.com",
  messagingSenderId: "1007675969167",
  appId: "1:1007675969167:web:ffbc3be48b555919112afa",
  measurementId: "G-J58331X45V",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };
export default db;
