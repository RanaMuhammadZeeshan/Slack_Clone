import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDzbP5c8EpN7rNHExL-0oZ4W3KDtHyanRA",
  authDomain: "slack-clone-5b8b3.firebaseapp.com",
  databaseURL: "https://slack-clone-5b8b3.firebaseio.com",
  projectId: "slack-clone-5b8b3",
  storageBucket: "slack-clone-5b8b3.appspot.com",
  messagingSenderId: "618530031705",
  appId: "1:618530031705:web:765e3bcc6ac0ea2dea0948",
  measurementId: "G-C1BCWE3XNT",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
