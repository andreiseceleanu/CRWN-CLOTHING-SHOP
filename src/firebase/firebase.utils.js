import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyB4GjoxECAK96eOp2G1_4qoKXcx2WIkr7Y",
    authDomain: "crwn-db-d979a.firebaseapp.com",
    databaseURL: "https://crwn-db-d979a.firebaseio.com",
    projectId: "crwn-db-d979a",
    storageBucket: "crwn-db-d979a.appspot.com",
    messagingSenderId: "1073040997199",
    appId: "1:1073040997199:web:0480f41d9baaa236dc233a",
    measurementId: "G-3D1X0YM6PK"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default signInWithGoogle;
