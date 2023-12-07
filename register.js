import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";

// Initialize Firebase

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
const auth = getAuth(app);
const db = getDatabase(app);

document.getElementById("register").addEventListener("click", function () {
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;

    if (name.trim() === '' || mobile.trim() === '' || email.trim() === '' || password.trim() === '' || confirm_password.trim() === '') {
        alert("Please fill in all the details.");
        return; // stop execution if there are missing details
    }

    if (password.length < 6) {
        alert("Password should contain at least 6 characters.");
        return; // stop execution if password is less than 6 characters
    }

    if (password !== confirm_password) {
        alert("Passwords do not match.");
        return; // stop execution if passwords do not match
    }

    // Perform registration
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            set(ref(db, 'User_credential/' + user.uid), {
                name: name,
                email: email,
                number: mobile
            })

            // Send email verification
            sendEmailVerification(user)
                .then(() => {
                    alert("Registration successful! Verification email sent. Please verify your email before logging in.");
                    // Redirect to login page after successful registration
                    window.location.href = "login.html";
                })
                .catch((error) => {
                    console.error(error.message);
                    alert("Error sending verification email. Please try again.");
                });
        })
        .catch((error) => {
            const errorMessage = error.message;
            if (errorMessage.includes("email-already-in-use")) {
                alert("Email address is already in use. Please use a different email.");
            } else {
                console.error(errorMessage);
                alert(errorMessage);
            }
        });
});

auth.onAuthStateChanged((user) => {
    if (user) {
        // User is signed in.
        console.log("User email:", user.email);
        // Here, you can perform actions based on the user's authentication state.
    } else {
        // User is signed out.
        console.log("User is signed out");
    }
});