// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfxwS0V6fIrP-grgD63AnQlF3Vtt5tq24",
  authDomain: "vatican-library.firebaseapp.com",
  projectId: "vatican-library",
  storageBucket: "vatican-library.appspot.com",
  messagingSenderId: "222051859506",
  appId: "1:222051859506:web:eff290165917a82c53102b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth