const texts = ["Explore Unmissable Events Around You", "Discover Amazing Events Near You", "Check Out Fantastic Events"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function typeEffect() {
            const textElement = document.getElementById("text");
            const cursorElement = document.getElementById("cursor");
            const currentText = texts[textIndex];
            
            if (isDeleting) {
                textElement.textContent = currentText.substring(0, charIndex);
                charIndex--;
            } else {
                textElement.textContent = currentText.substring(0, charIndex);
                charIndex++;
            }

            if (!isDeleting && charIndex === currentText.length + 1) {
                setTimeout(() => isDeleting = true, 1000);
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
            }

            setTimeout(typeEffect, isDeleting ? 50 : 100);
        }

        typeEffect();