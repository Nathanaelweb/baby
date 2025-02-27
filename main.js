let enteredCode = '';
const correctCode = '2023'; // Change this to your preferred code

// Listen to number key presses
document.querySelectorAll('.key').forEach(key => {
    key.addEventListener('click', (event) => {
        enteredCode += event.target.textContent;
        updatePasswordDisplay();

        // Check if code entered matches the correct one
        if (enteredCode === correctCode) {
            showApologySection();
        }
    });
});

// Display the entered password on top of the keyboard
function updatePasswordDisplay() {
    const passwordDisplay = document.getElementById('password-display');
    passwordDisplay.textContent = enteredCode; // Update the displayed password
}

// Show apology and pictures if correct code is entered
function showApologySection() {
    const response = document.getElementById('response');
    const apologySection = document.getElementById('apology-section');

    response.textContent = 'Thank you for your understanding! I love you ❤️';
    response.style.color = '#248, 27, 2';

    // Show apology and picture section
    apologySection.style.display = 'block';
    
    // Optionally, reset entered code if you want the user to start fresh
    enteredCode = '';
    updatePasswordDisplay(); // Reset the displayed password
}
document.addEventListener("DOMContentLoaded", function () {
    const gallery = document.querySelector(".gallery");
    const sprinkleCount = 20; // Number of sprinkles

    for (let i = 0; i < sprinkleCount; i++) {
        let sprinkle = document.createElement("div");
        sprinkle.classList.add("sprinkle-light");

        // Random size for natural effect
        let size = Math.random() * 6 + 3; // Between 3px and 9px
        sprinkle.style.width = `${size}px`;
        sprinkle.style.height = `${size}px`;

        // Random animation duration and delay
        let duration = Math.random() * 3 + 3; // Between 3s and 6s
        let delay = Math.random() * 3; // Between 0s and 3s
        sprinkle.style.animationDuration = `${duration}s`;
        sprinkle.style.animationDelay = `${delay}s`;

        gallery.appendChild(sprinkle);
    }
});
