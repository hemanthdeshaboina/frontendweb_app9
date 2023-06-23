document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    // Validate form fields
    if (name === "" || email === "") {
        showMessage("Please fill in all fields", "red");
        return;
    }

    // Send form data to the server (can be handled by a server-side script)
    // Here, we simply display a success message
    showMessage("Form submitted successfully!", "green");
});

function showMessage(message, color) {
    var messageElement = document.getElementById("message");
    messageElement.textContent = message;
    messageElement.style.color = color;
}
