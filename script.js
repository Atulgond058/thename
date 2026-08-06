document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Responsive Navigation Menu Logic
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link-item');

    mobileMenuBtn.addEventListener('click', () => {
        navLinksContainer.classList.toggle('active');
        // Toggle mobile menu icon
        const icon = mobileMenuBtn.querySelector('i');
        if (navLinksContainer.classList.contains('active')) {
            icon.className = 'fas fa-times';
        } else {
            icon.className = 'fas fa-bars';
        }
    });

    // Close menu when a link is clicked (Mobile optimization)
    navLinksItems.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('active')) {
                navLinksContainer.classList.remove('active');
                mobileMenuBtn.querySelector('i').className = 'fas fa-bars';
            }
        });
    });

    // 2. Interactive Contact Form Validation Engine
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Stop native postbacks

        // Input handles
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');

        // Target error elements
        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const messageError = document.getElementById('message-error');
        const successMsg = document.getElementById('form-success');

        let isValid = true;

        // Name Validation
        if (nameInput.value.trim().length < 3) {
            nameError.style.display = 'block';
            nameInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            nameError.style.display = 'none';
            nameInput.style.borderColor = '#ccc';
        }

        // Email Validation Regular Expression
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            emailError.style.display = 'block';
            emailInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            emailError.style.display = 'none';
            emailInput.style.borderColor = '#ccc';
        }

        // Message Validation
        if (messageInput.value.trim().length < 10) {
            messageError.style.display = 'block';
            messageInput.style.borderColor = '#dc3545';
            isValid = false;
        } else {
            messageError.style.display = 'none';
            messageInput.style.borderColor = '#ccc';
        }

        // Processing success status
        if (isValid) {
            successMsg.style.display = 'block';
            contactForm.reset();
            
            // Hide notification after standard viewing block window
            setTimeout(() => {
                successMsg.style.display = 'none';
            }, 4000);
        }
    });
});
