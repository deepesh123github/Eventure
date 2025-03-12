document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');

    // Function to show validation messages
    function showValidationMessage(input, message) {
        input.setCustomValidity(message);
        input.reportValidity();
    }

    // Phone number validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 10) {
            value = value.slice(0, 10); // Limit to 10 digits
        }
        e.target.value = value;

        if (value.length < 10) {
            showValidationMessage(e.target, 'Phone number must be 10 digits');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // Age validation (1 to 100)
    const ageInput = document.getElementById('age');
    ageInput.addEventListener('input', function (e) {
        let value = e.target.value.replace(/\D/g, '').slice(0, 3); // Restrict to 3 digits
        e.target.value = value;

        let age = parseInt(value);
        if (age < 1 || age > 100) {
            showValidationMessage(e.target, 'Age must be between 1 and 100');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // Email validation
    const emailInput = document.getElementById('email');
    emailInput.addEventListener('input', function (e) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(e.target.value)) {
            showValidationMessage(e.target, 'Enter a valid email address');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // Password validation
    const passwordInput = document.getElementById('password');
    passwordInput.addEventListener('input', function (e) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordPattern.test(e.target.value)) {
            showValidationMessage(e.target, 'Password must have 8+ characters, 1 uppercase, 1 number, 1 special character');
        } else {
            e.target.setCustomValidity('');
        }
    });

    // Form submission validation
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let allValid = true;
        const inputs = form.querySelectorAll('input, select');

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add('is-invalid');
                showValidationMessage(input, 'This field is required');
                allValid = false;
            } else {
                input.classList.remove('is-invalid');
            }
        });

        if (!form.checkValidity() || !allValid) {
            alert('Please fill in all required fields correctly.');
            return;
        }

        // Handle form submission
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            age: document.getElementById('age').value,
            role: document.getElementById('userRole').value,
            password: document.getElementById('password').value
        };

        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    });
});