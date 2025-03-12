document.getElementById("jobTitle").addEventListener("change", function() {
    let otherJobInput = document.getElementById("otherJobTitle");
    if (this.value === "Other") {
        otherJobInput.classList.remove("d-none");
        otherJobInput.setAttribute("required", "true");
    } else {
        otherJobInput.classList.add("d-none");
        otherJobInput.removeAttribute("required");
    }
});

document.getElementById("demoForm").addEventListener("submit", function(event) {
    let phoneInput = document.getElementById("phoneNumber");
    let phoneWarning = document.getElementById("phoneWarning");

    if (phoneInput.value.length !== 10) {
        event.preventDefault();
        phoneWarning.classList.remove("d-none");
    } else {
        phoneWarning.classList.add("d-none");
        alert("Form submitted successfully!");
    }
});