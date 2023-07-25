// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXxZZMR8qlBK8_tfosyHTOxMFIUrR0gGI",
  authDomain: "appenquete-20d99.firebaseapp.com",
  projectId: "appenquete-20d99",
  storageBucket: "appenquete-20d99.appspot.com",
  messagingSenderId: "922773456268",
  appId: "1:922773456268:web:a607886943a0765956c2a9",
  measurementId: "G-YRRMSH05G9"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);