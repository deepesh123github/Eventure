document.getElementById("signinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Define allowed credentials and their corresponding redirect pages
    const credentials = {
        "Host@123.com": { password: "password1", redirect: "/hostdashboard/host.html" },
        "Admin@123.com": { password: "password2", redirect: "/Admin/admin.html" },
        "User@123.com": { password: "password3", redirect: "/User/user.html" }
    };
    
    if (credentials[email] && credentials[email].password === password) {
        window.location.href = credentials[email].redirect;
    } else {
        alert("Invalid email or password. Please try again.");
    }
});