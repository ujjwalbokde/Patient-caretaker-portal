import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getDatabase,set,ref } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-database.js";


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
appointDetail
document.getElementById("appointDetail").addEventListener("click", function (){
    const name = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const problem = document.getElementById("problem").value;
    const duration = document.getElementById("duration").value;
    const number = document.getElementById("contact").value;
    const email = document.getElementById("email").value;
    const caregiverPreference = document.getElementById("caregiverPreference").value;
    const specialInstructions = document.getElementById("specialInstructions").value;
    const specificRequirements = document.getElementById("specificRequirements").value;

    // const user = userCredential.user;
    set(ref(db,'Appointment_Details/'),{
        name : name,
        age : age,
        city : city,
        address : address,
        problem : problem,
        duration : duration,
        number : number,
        email : email,
        caregiverPreference : caregiverPreference,
        specialInstructions : specialInstructions,
        specificRequirements : specificRequirements
    }).then(()=>{
        alert("Appointment details saved");
        window.location.href = "ourcaretakers.html"
    })
    .catch((error)=>{
        console.error(error.message);
        alert("Error "+error)
    })

})