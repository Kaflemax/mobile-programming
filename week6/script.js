  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
  import { getDatabase, set, ref } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDzgl5LyMK_LdoHu88VRFH9sZCZYUDamqM",
    authDomain: "mobile-programming-34d27.firebaseapp.com",
    projectId: "mobile-programming-34d27",
    storageBucket: "mobile-programming-34d27.firebasestorage.app",
    messagingSenderId: "604455710586",
    appId: "1:604455710586:web:aab629890b68c35d62f0c3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  //console.log(app)
    const db = getDatabase(app)
  console.log(db)

  function writeUserData(userId, firstname, lastname){
    set(ref(db,'users/'+userId),{
        firstname: firstname,
        lastname: lastname,
    });
  }
  writeUserData(1,"Shisir","Kafle")
