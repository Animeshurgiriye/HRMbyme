import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB35jOluYH_6fUBUOERmKhcZVDBkmVAWTY",
  authDomain: "hrm-react-75a4c.firebaseapp.com",
  projectId: "hrm-react-75a4c",
  storageBucket: "hrm-react-75a4c.appspot.com",
  messagingSenderId: "299888408427",
  appId: "1:299888408427:web:9b5d97cac1a568cd073e2e",
  measurementId: "G-ES58B8BDE9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const authentication = firebaseApp.auth();
const db = firebaseApp.firestore();

export default firebaseApp;
export { db, authentication };
