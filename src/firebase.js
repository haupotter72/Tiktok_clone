// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbn85aTO58xLYP39CKOWV7TbDS56erdok",
  authDomain: "tiktok-bb7b3.firebaseapp.com",
  projectId: "tiktok-bb7b3",
  storageBucket: "tiktok-bb7b3.appspot.com",
  messagingSenderId: "405476990202",
  appId: "1:405476990202:web:32a688720c444a1f0ebd43",
  measurementId: "G-5LFH8DH4YM"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db=app.firestore();

export default db;