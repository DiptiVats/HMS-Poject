// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5-VPfr47aKxHpLDGqL1R-N0cyijOZ_l0",
  authDomain: "hms-project-9a055.firebaseapp.com",
  projectId: "hms-project-9a055",
  storageBucket: "hms-project-9a055.appspot.com",
  messagingSenderId: "85775637250",
  appId: "1:85775637250:web:b254f477d3b46acf23401b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
