document.addEventListener('DOMContentLoaded', (event) => {
    const backgroundElement = document.getElementById('menu-background-pattern-moving');

    // Example of controlling animation with JavaScript
    // You can adjust the animation speed or start/stop the animation dynamically
    function changeAnimationSpeed(speed) {
        backgroundElement.style.animationDuration = speed + 's';
    }

    // Call this function to change the speed of the animation
    changeAnimationSpeed(100); // Change to 10 seconds for slower animation
});