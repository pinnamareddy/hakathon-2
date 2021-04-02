import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoTEnQyM-w2tgwhVwd36yWv8x0O5putkI",
    authDomain: "drive-clone-d7b52.firebaseapp.com",
    projectId: "drive-clone-d7b52",
    storageBucket: "drive-clone-d7b52.appspot.com",
    messagingSenderId: "1020723418321",
    appId: "1:1020723418321:web:9e31c82a9c7b9395b5a1f0",
    measurementId: "G-MB4804BP41"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const storage = firebase.storage()
const db = firebaseApp.firestore()

export { auth, provider, db, storage }