import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyDgL8id8MY-qA7m55jKJA_SJkZkFbaqvcM",
  authDomain: "crown-db-83439.firebaseapp.com",
  projectId: "crown-db-83439",
  storageBucket: "crown-db-83439.appspot.com",
  messagingSenderId: "319901794577",
  appId: "1:319901794577:web:300b2157591fa0ba078cb0",
  measurementId: "G-18CK1BJ757"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
