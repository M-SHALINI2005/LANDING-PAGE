document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.get-started');
    const ctaButton = document.querySelector('.cta');

    getStartedButton.addEventListener('click', function() {
        alert('Getting started with Daily Harvest!');
    });

    ctaButton.addEventListener('click', function() {
        alert('Use code FB25 to get $25 off your first box!');
    });
});