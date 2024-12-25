// Initialize EmailJS
emailjs.init("rKsHrHu79ng4roVnM"); // Replace with your EmailJS public key

// Select the form and send button
const form = document.querySelector(".contact-form");
const sendButton = document.querySelector(".contact-form .btn");

// Add event listener for form submission
sendButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission

  // Collect form data
  const name = form.querySelector('input[placeholder="Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email"]').value.trim();
  const subject = form.querySelector('input[placeholder="Subject"]').value.trim();
  const message = form.querySelector('textarea[placeholder="Message"]').value.trim();

  // Validate form data
  if (!name || !email || !subject || !message) {
    alert("Please fill out all fields.");
    return;
  }

  // Send data using EmailJS
  emailjs
    .send("service_hswr5j5", "template_3rz0n8q", {
      name: name,
      email: email,
      subject: subject,
      message: message,
    })
    .then(
      (response) => {
        console.log("EmailJS Response:", response.status, response.text); // Log success response
        alert("Message sent successfully!");
        form.reset(); // Clear the form
      },
      (error) => {
        console.error("EmailJS Error:", error); // Log error response
        alert("Failed to send message. Please try again later.");
      }
    );
});
