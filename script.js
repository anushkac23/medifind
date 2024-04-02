
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
  import { getDatabase, ref, set, get, child} from "https://www.gstatic.com/firebasejs/10.10.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use

  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBc9zJqbgJjOsaMzG_SRnY_bvRmFvaCWaM",
    authDomain: "medifind-d3a00.firebaseapp.com",
    projectId: "medifind-d3a00",
    storageBucket: "medifind-d3a00.appspot.com",
    messagingSenderId: "625828201271",
    appId: "1:625828201271:web:b3174607437f27863a10b2"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getDatabase(app);
  document.getElementById("")