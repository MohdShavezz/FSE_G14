// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIaSyCB8BCslrdkhv3yO7JXMG161Ur5yTI1E",
  authDomain: "my-react-app-c8bc8.firebaseapp.com",
  projectId: "my-react-app-c8bc8",
  storageBucket: "my-react-app-c8bc8.firebasestorage.app",
  messagingSenderId: "101429740741",
  appId: "1:101429740741:web:6a99a971c01568490e6c",
  measurementId: "G-HHYW25QNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);