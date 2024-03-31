document.addEventListener('DOMContentLoaded', function () {
    // Reference to the pill bottle container
    const pillBottle = document.querySelector('.pill-bottle');
    // Reference to the button that will start the animation
    const startButton = document.getElementById('startAnimation');

    // Function to create and animate a pill
    function createPill() {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        // Randomly choose the pill color
        const pillColor = Math.random() > 0.5 ? 'red' : 'blue';
        pill.style.backgroundColor = pillColor;
        // Randomly set the starting left position within the pill bottle
        pill.style.left = Math.random() * (pillBottle.offsetWidth - 20) + 'px';
        pillBottle.appendChild(pill);

        // Apply the animation to the pill
        pill.style.animation = 'fall 2s linear forwards';

        // Remove the pill from the DOM when its animation ends
        pill.addEventListener('animationend', function () {
            pill.remove();
        });
    }

    // Function to start the pill animation
    function startPillAnimation() {
        setInterval(createPill, 1000); // Adjust the interval as necessary
    }

    // Add an event listener to the button to start the animation on click
    startButton.addEventListener('click', function() {
        startPillAnimation();
        // Optionally hide the start button to prevent re-clicks
        this.style.display = 'none';
    });
});
