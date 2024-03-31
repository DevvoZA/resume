document.addEventListener('DOMContentLoaded', function() {
    const pillBottle = document.querySelector('.pill-bottle');

    function createPill() {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        // Randomly choose the pill color and set a random starting position
        const pillColor = Math.random() > 0.5 ? 'red' : 'blue';
        const startPos = Math.floor(Math.random() * (pillBottle.offsetWidth - 20)); // Ensure pills start within the bottle
        pill.style.backgroundColor = pillColor;
        pill.style.left = startPos + 'px';
        pillBottle.appendChild(pill);

        // Add animation dynamically to ensure it plays on creation
        pill.style.animation = 'fall 2s linear forwards';

        pill.addEventListener('animationend', function() {
            pill.remove(); // Clean up by removing pill after animation ends
        });
    }

    function startPillAnimation() {
        setInterval(createPill, 1000); // Adjust as needed for timing
    }

    startPillAnimation();
});
