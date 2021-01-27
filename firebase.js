import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCl-mjuGxC_dZicNo7CgFntnz0cwNuMSXE",
  authDomain: "linkedin-f1992.firebaseapp.com",
  projectId: "linkedin-f1992",
  storageBucket: "linkedin-f1992.appspot.com",
  messagingSenderId: "565811013363",
  appId: "1:565811013363:web:c8fc2d4bd29a46842a3986",
  measurementId: "G-5CKKBVJKVS"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };


