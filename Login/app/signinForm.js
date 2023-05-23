import {signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import {auth} from './firebase.js'
import { showMessage } from "./showMessage.js";

const signinForm = document.querySelector("#login-form")

signinForm.addEventListener('submit', async e => {
    e.preventDefault()
    const email = signinForm['login-email'].value;
    const password = signinForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        window.location='../tienda/tienda.html'
    } catch (error) {
        if (error.code === "auth/network-request-failed"){
            showMessage('Error','error')
        }else{
            showMessage(error.message, 'error')
        }
    }
})
