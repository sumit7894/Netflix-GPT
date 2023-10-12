// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfEJHng4ODQ6yF7MveszIKNj0LiKt-qls",
  authDomain: "netflixgpt-f0a58.firebaseapp.com",
  projectId: "netflixgpt-f0a58",
  storageBucket: "netflixgpt-f0a58.appspot.com",
  messagingSenderId: "335791816049",
  appId: "1:335791816049:web:227953413f6e430de14ad0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();