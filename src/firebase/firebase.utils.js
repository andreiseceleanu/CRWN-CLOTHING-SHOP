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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapShot = await userRef.get(); 

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user', error.message);
            
        }
    }

    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default signInWithGoogle;
