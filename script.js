document.addEventListener('DOMContentLoaded', function() {
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

        // Animation end event to remove the pill from the DOM
        pill.addEventListener('animationend', function() {
            pill.remove();
        });
    }

    // Function to start dropping pills at intervals
    function startPill
