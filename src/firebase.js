import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCNGwg2CeihCZ-fYoXYgKKvjXBUJbUlQ44",
  authDomain: "twitter-clone-d5bca.firebaseapp.com",
  projectId: "twitter-clone-d5bca",
  storageBucket: "twitter-clone-d5bca.appspot.com",
  messagingSenderId: "588900711939",
  appId: "1:588900711939:web:8f567a5544faee628c5836",
  measurementId: "G-TP14E64G7P",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
