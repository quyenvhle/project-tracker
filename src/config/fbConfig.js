import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBrYpQJrwrnVWuKzvwRbMdyUh2ePKBApZY",
    authDomain: "project-tracker-95777.firebaseapp.com",
    databaseURL: "https://project-tracker-95777.firebaseio.com",
    projectId: "project-tracker-95777",
    storageBucket: "project-tracker-95777.appspot.com",
    messagingSenderId: "127152537761",
    appId: "1:127152537761:web:f7957f6045bf1f5e77b0e0",
    measurementId: "G-X06XGVRVN4"
  };
// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;