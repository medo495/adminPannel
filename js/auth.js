document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, password: password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            localStorage.setItem("token", data.token); // Store JWT token
            window.location.href = "dashboard.html"; // Redirect to dashboard
        } else {
            document.getElementById("error-message").textContent = "Invalid credentials!";
        }
    })
    .catch(error => console.error("Error:", error));
});
