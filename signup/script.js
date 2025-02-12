// Form validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    
    // Phone number validation
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digits
        if (value.length > 10) {
            value = value.slice(0, 10); // Limit to 10 digits
        }
        e.target.value = value;
    });

    // Age validation
    const ageInput = document.getElementById('age');
    ageInput.addEventListener('input', function(e) {
        let value = parseInt(e.target.value);
        if (value < 18) {
            e.target.setCustomValidity('You must be at least 18 years old');
        } else if (value > 120) {
            e.target.setCustomValidity('Please enter a valid age');
        } else {
            e.target.setCustomValidity('');
        }
    });
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Handle form submission here
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                age: document.getElementById('age').value,
                password: document.getElementById('password').value
            };
            
            console.log('Form submitted:', formData);
            // You can add your API call or other submission logic here
        }
        
        form.classList.add('was-validated');
    });
});