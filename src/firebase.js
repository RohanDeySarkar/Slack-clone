import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCGPXdDkcDntAF8ce88Sw7yHQ2kAn2H0po",
    authDomain: "slack-clone-6584f.firebaseapp.com",
    projectId: "slack-clone-6584f",
    storageBucket: "slack-clone-6584f.appspot.com",
    messagingSenderId: "513919664991",
    appId: "1:513919664991:web:84fc34f7a807ada5b3ecea",
    measurementId: "G-C30SC3CW71"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db};
