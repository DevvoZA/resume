document.addEventListener('DOMContentLoaded', function () {
    const pillBottle = document.querySelector('.pill-bottle');

    function createPill() {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        // Randomly choose the pill color
        const pillColor = Math.random() > 0.5 ? 'red' : 'blue';
        pill.style.backgroundColor = pillColor;
        // Randomly set the starting left position
        pill.style.left = Math.random() * (pillBottle.offsetWidth - 20) + 'px'; // Adjust for pill width
        pillBottle.appendChild(pill);

        // Define and start the animation
        pill.style.animation = 'fall 2s linear forwards';

        // Listen for when the animation ends and then remove the pill
        pill.addEventListener('animationend', function () {
            pill.remove();
        });
    }

    // Start dropping pills at intervals
    function startPillAnimation() {
        setInterval(createPill, 1000); // Creates a pill every 1000 milliseconds (1 second)
    }

    startPillAnimation();
});
