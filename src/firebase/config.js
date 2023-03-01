import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_2F0-hs_bQZcv83jUyScWQi2P25drXpE",
    authDomain: "olx-clone-74017.firebaseapp.com",
    projectId: "olx-clone-74017",
    storageBucket: "olx-clone-74017.appspot.com",
    messagingSenderId: "531095903332",
    appId: "1:531095903332:web:4101c254173f021f7a5371",
    measurementId: "G-1QHEGQ42GH"
  };

  export const Firebase= firebase.initializeApp(firebaseConfig)