import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyCEz8cvoNB5RLKi9pSA0Xh-BBoS3H_Fm-4",
    authDomain: "snagaprirode-98abc.firebaseapp.com",
    projectId: "snagaprirode-98abc",
    storageBucket: "snagaprirode-98abc.appspot.com",
    messagingSenderId: "138329730780",
    appId: "1:138329730780:web:214ca580db770b16d1ce19",
    measurementId: "G-B4T80Y67W5"
  };
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;