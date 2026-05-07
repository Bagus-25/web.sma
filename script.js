document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    
    // Hide preloader after everything is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
        }, 1000); // Small delay for effect
    });

    const loginForm = document.getElementById('login-form');
    const loginSlide = document.getElementById('login-slide');
    const resultSlide = document.getElementById('result-slide');
    const errorMsg = document.getElementById('error-msg');
    const logoutBtn = document.getElementById('logout-btn');
    const displayUser = document.getElementById('display-user');
    const studentNameDisplay = document.getElementById('student-name-display');

    // Handle Login
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '1234' && password === '1234') {
            // Success
            loginSlide.classList.remove('active');
            resultSlide.classList.add('active');
            errorMsg.style.display = 'none';
            
            // Update UI with the username
            displayUser.textContent = `Hai USER ${username}`;
            studentNameDisplay.textContent = `USER ${username}`;
            
            // Clean up form
            loginForm.reset();
        } else {
            // Failure
            errorMsg.style.display = 'block';
            
            // Shake effect on error
            const card = document.querySelector('.login-card');
            card.style.animation = 'none';
            card.offsetHeight; // trigger reflow
            card.style.animation = 'shake 0.4s ease-in-out';
        }
    });

    // Handle Logout
    logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        resultSlide.classList.remove('active');
        loginSlide.classList.add('active');
    });
});

// Add shake animation to style dynamically if not already in CSS
const style = document.createElement('style');
style.textContent = `
@keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-10px); }
    75% { transform: translateX(10px); }
}
`;
document.head.appendChild(style);
