document.addEventListener('DOMContentLoaded', function () {
    const pillBottle = document.querySelector('.pill-bottle');
    const lid = document.querySelector('.lid');
    const startButton = document.getElementById('startAnimation');

    function createPill() {
        const pill = document.createElement('div');
        pill.classList.add('pill');
        const pillColor = Math.random() > 0.5 ? 'red' : 'blue';
        pill.style.backgroundColor = pillColor;
        pill.style.left = Math.random() * (pillBottle.offsetWidth - 20) + 'px';
        pill.style.animation = `fall ${Math.random() * 2 + 2}s linear forwards`;
        pillBottle.appendChild(pill);
    }

    function startPillAnimation() {
        lid.style.animation = 'popLid 2s ease forwards';
        setTimeout(() => {
            setInterval(createPill, 200);
        }, 2100); // Slightly after lid animation to ensure it pops off first
    }

    startButton.addEventListener('click', function () {
        this.remove(); // Remove button to prevent re-triggering
        startPillAnimation();
    });
});
