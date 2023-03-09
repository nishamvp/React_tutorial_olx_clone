import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnDHnmlzRT9iMBLmG92-6Xk26Ijfrcz90",
  authDomain: "olx-758e9.firebaseapp.com",
  projectId: "olx-758e9",
  storageBucket: "olx-758e9.appspot.com",
  messagingSenderId: "924621349528",
  appId: "1:924621349528:web:001561f3e844f879f626ed",
  measurementId: "G-FWG0NS4DPG"
};

  export default  firebase.initializeApp(firebaseConfig)