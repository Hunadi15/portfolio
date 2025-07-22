document.addEventListener("DOMContentLoaded", function () {
    // const menuIcon = document.getElementById('menuIcon');
    // const navLinks = document.getElementById('navLinks');
    const form = document.getElementById('contactForm');

    // Mobile menu toggle
    // menuIcon.addEventListener('click', () => {
    //     navLinks.classList.toggle('active');
    // });
    

    // Initialize EmailJS
    emailjs.init("biVoV0ngVLFgW30Fj");

    // Form submission handler
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        // const phone_number = document.getElementById("phone_number").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            alert("⚠️ Please fill in all fields.");
            return;
        }

        emailjs.send("service_bo9uwlm", "template_6m2yxma", {
            name,
            email,
            message
        })
        .then(function (response) {
            alert("✅ Message sent successfully!");
            form.reset();
        })
        .catch(function (error) {
            console.error("EmailJS error:", error);
            alert("❌ Failed to send message. Please try again.");
        });
    });
});