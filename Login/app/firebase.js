// Import the functions you need from the SDKs you need
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-analytics.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyD38EUzccyebPN0xr4cEcCEhsiDU8AzK4g",
    authDomain: "imagina-2a66a.firebaseapp.com",
    projectId: "imagina-2a66a",
    storageBucket: "imagina-2a66a.appspot.com",
    messagingSenderId: "191860449860",
    appId: "1:191860449860:web:74e5a89387b3c634d35211",
    measurementId: "G-PWH0ES22E9"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  export const auth = getAuth(app);
