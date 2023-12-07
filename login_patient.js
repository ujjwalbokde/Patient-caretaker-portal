import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyCz3i5KsHkL8V_Xtlp_YxI2Bn7zW85vZqY",
    authDomain: "web-app-17ec8.firebaseapp.com",
    databaseURL: "https://web-app-17ec8-default-rtdb.firebaseio.com",
    projectId: "web-app-17ec8",
    storageBucket: "web-app-17ec8.appspot.com",
    messagingSenderId: "441037060142",
    appId: "1:441037060142:web:fabdd2b6845f5d803707bf",
    measurementId: "G-GZCX9WPV7N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("login_email").value;
    var password = document.getElementById("login_password").value;


    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            
            
            if (user.emailVerified) {
                // Check if the user's email is verified
                alert("Login successful!");
                // Redirect to the home page after successful login
                window.location.href = "after_login.html";

            } else {
                alert("Please verify your email before logging in.");
            }
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
});