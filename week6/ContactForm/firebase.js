import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAu_wsHnGsDgfa6UkgbMadw9iHAVObqtO4",
    authDomain: "contact-form-d1b3d.firebaseapp.com",
    projectId: "contact-form-d1b3d",
    storageBucket: "contact-form-d1b3d.firebasestorage.app",
    messagingSenderId: "341120970628",
    appId: "1:341120970628:web:b24cd721a8ccfa5bf7b7d1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);