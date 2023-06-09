import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import{ auth } from './firebase.js'
import { showMessage } from "./showMessage.js";
const signupForm = document.querySelector('#signup-form')
signupForm.addEventListener('submit',async (e) => {
    e.preventDefault()
    //const newUser = signupForm['signup-user'].value
    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value
    console.log(email, password)
    try {
        const userCredentials = await createUserWithEmailAndPassword(auth , email, password)
        console.log(userCredentials)
        showMessage("Te haz registrado correctamente "+userCredentials.user.email,"success")
    }   catch (error) {
        console.log(error.mesage)
        console.log(error.code) 
        if(error.code === 'auth/email.already-in-use'){
            showMessage("El email esta mal","error")
        }
        else if(error.code === 'auth/network-request-failed'){
            showMessage("El email esta mal/ o en uso","error")
        }else if (error.code === 'auth/weak-password'){
            showMessage("Tu contraseña es muy debil como el BARCA","error")
        }else if(error.code){
            showMessage("Algo salio mal","error")
        }
    }
    
})