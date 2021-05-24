import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyB1u-kii6V28RwcqMc3U_pTBUNT0PXjkbs",
    authDomain: "pokemart-db-105ea.firebaseapp.com",
    projectId: "pokemart-db-105ea",
    storageBucket: "pokemart-db-105ea.appspot.com",
    messagingSenderId: "277163137468",
    appId: "1:277163137468:web:29f9300a7a9f2769eaf3b9",
    measurementId: "G-W6RZDZSX0K"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
