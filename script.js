document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes-button');
    const noButton = document.getElementById('no-button');
    const message = document.getElementById('message');
    let isButtonDisabled = false; 

    yesButton.addEventListener('click', () => {
        message.classList.remove('hidden');
        noButton.disabled = true; // Disable the no button
        isButtonDisabled = true; // Update 
        noButton.style.cursor = 'not-allowed'; // para dinamulihok 
    });

    document.addEventListener('mousemove', (event) => {
        if (isButtonDisabled) return; // Exit if the button is disabled

        const rect = noButton.getBoundingClientRect();
        const buttonCenterX = rect.left + rect.width / 2;
        const buttonCenterY = rect.top + rect.height / 2;

        // check kung duul ba ang mouse
        if (Math.abs(event.clientX - buttonCenterX) < 35 && Math.abs(event.clientY - buttonCenterY) < 35) {
            moveButtonRandomly();
        }
    });

    function moveButtonRandomly() {
        const buttonWidth = noButton.offsetWidth;
        const buttonHeight = noButton.offsetHeight;
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Para di mawagtang ang no
        const maxX = viewportWidth - buttonWidth;
        const maxY = viewportHeight - buttonHeight;

        // position calculator
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Apply the new position 
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    }
});
