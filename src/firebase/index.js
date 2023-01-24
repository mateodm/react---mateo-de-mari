// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6h5lAO6l6CY2QrBECAIR_hyFwUkI8Ta4",
  authDomain: "ecommerce-4f632.firebaseapp.com",
  projectId: "ecommerce-4f632",
  storageBucket: "ecommerce-4f632.appspot.com",
  messagingSenderId: "404032194039",
  appId: "1:404032194039:web:bee28e76ff6f5867921af2",
  measurementId: "G-0G4MZ06X9J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const bd = getFirestore(app)