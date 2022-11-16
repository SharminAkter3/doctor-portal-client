// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQkLZNOhbHbgRUbD8g4cC8z65BumDIgSk",
    authDomain: "doctors-portal-6ed20.firebaseapp.com",
    projectId: "doctors-portal-6ed20",
    storageBucket: "doctors-portal-6ed20.appspot.com",
    messagingSenderId: "702023962419",
    appId: "1:702023962419:web:db5a2997473054f7e1b846"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;