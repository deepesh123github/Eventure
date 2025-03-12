document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.remove("bi-eye-slash");
        this.classList.add("bi-eye");
    } else {
        passwordField.type = "password";
        this.classList.remove("bi-eye");
        this.classList.add("bi-eye-slash");
    }
});