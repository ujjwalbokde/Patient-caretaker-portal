
function sendEmail() {
    emailID=prompt("Unlock the door to unparalleled care and comfort – simply enter your registered email ID to confirm your chosen caretaker and embark on a journey of personalized support and attention");
    (function () {
        emailjs.init("Px75o1ML-oYFi0oXz");
    })();

    var params = {
        to: emailID,
        subject: "Confirmation and Welcome to Your Upcoming Appointment!",
        to_name: "Patient!",
        message: "I hope this message finds you well. We are delighted to inform you that your appointment for a caretaker has been successfully booked. Your well-being is our top priority, and we are committed to providing you with the best possible care."+
        "\n\nThank you for choosing healinghandscommunity for your care needs. We look forward to assisting you and ensuring a positive and supportive experience."
    };
    var serviceID = "service_ieyccer";
    var templateID = "template_175ij1q";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            alert("Email send successfully!");
            window.location.href = "request.html";
        })
        .catch();

}
