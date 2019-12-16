import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyBCaZyC49agIU10XRACh7S22U_lXEVkD6E",
  authDomain: "psam-firebase-toy.firebaseapp.com",
  databaseURL: "https://psam-firebase-toy.firebaseio.com",
  projectId: "psam-firebase-toy",
  storageBucket: "psam-firebase-toy.appspot.com",
  messagingSenderId: "967977126751",
  appId: "1:967977126751:web:ae0555628857e20821c4ea",
  measurementId: "G-2K3XY7450C"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.firestore().setting({ timestempInSnapshots: true });

export default firebase;
