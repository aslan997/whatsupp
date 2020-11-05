// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBhl2_QeRvvOfxWUoyJ_0chLaO93kSDKmU",
    authDomain: "whats-upp-3da51.firebaseapp.com",
    databaseURL: "https://whats-upp-3da51.firebaseio.com",
    projectId: "whats-upp-3da51",
    storageBucket: "whats-upp-3da51.appspot.com",
    messagingSenderId: "910696530538",
    appId: "1:910696530538:web:2fadbf337f6d83c49f8013",
    measurementId: "G-MS8GG41HJC"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider=new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;