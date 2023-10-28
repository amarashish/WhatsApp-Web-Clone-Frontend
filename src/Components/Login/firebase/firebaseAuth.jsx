import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD3KcvBYtwHhA-6HCrqmHPvFUxo1dINnm0",
    authDomain: "react-login-mobile.firebaseapp.com",
    projectId: "react-login-mobile",
    storageBucket: "react-login-mobile.appspot.com",
    messagingSenderId: "937159556139",
    appId: "1:937159556139:web:4f52abbab2780ce946fe6e",
    measurementId: "G-HGB8PHHGTQ"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);




