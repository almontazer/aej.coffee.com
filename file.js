// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received. We'll get back to you at ${email}.`);
        document.getElementById("contactForm").reset();
    } else {
        alert("Please fill in all fields before submitting.");
    }
});
