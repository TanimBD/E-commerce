import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCfRjCOv5bUhzREopuYq8OvL6_EEu0B6mU",
    authDomain: "e-commerce-raindrops.firebaseapp.com",
    projectId: "e-commerce-raindrops",
    storageBucket: "e-commerce-raindrops.appspot.com",
    messagingSenderId: "855566907178",
    appId: "1:855566907178:web:c0f353a4964076f507d053"
};

const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export { fireDB, auth };