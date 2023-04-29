import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAeut_vPP_cdUW6dyTbujc9KAiedsbe5x0",
  authDomain: "assesment-e33c0.firebaseapp.com",
  databaseURL: "https://assesment-e33c0-default-rtdb.firebaseio.com",
  projectId: "assesment-e33c0",
  storageBucket: "assesment-e33c0.appspot.com",
  messagingSenderId: "944761674380",
  appId: "1:944761674380:web:21d66bec84c2b03e3c79a9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };