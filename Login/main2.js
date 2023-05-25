import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { auth } from "./app/firebase.js";
const credentials = onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log(user)
        Message("Bienvenido "+user.email)
      const uid = user.uid;
      // ...
    } else {
        window.location = './login.html'
      // User is signed out
      // ...
    }
});
import {Message} from "./message.js";