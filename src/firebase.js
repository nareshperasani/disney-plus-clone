import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBxhXQX9mz4ouIMj96ZDqaflK4OJr9MIOA",
  authDomain: "disney-plus-clone-7229e.firebaseapp.com",
  projectId: "disney-plus-clone-7229e",
  storageBucket: "disney-plus-clone-7229e.appspot.com",
  messagingSenderId: "406649803829",
  appId: "1:406649803829:web:8ff67122da23852e3a8d7c"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;