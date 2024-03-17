
document.addEventListener('DOMContentLoaded', function() {
    let yesRadio = document.getElementById('yes');
    let noRadio = document.getElementById('no');
    let displayDiv = document.getElementById('show-it');

    yesRadio.addEventListener('change', function() {
        if (yesRadio.checked) {
            displayDiv.classList.add('show');
        }
    });

    noRadio.addEventListener('change', function() {
        if (noRadio.checked) {
            displayDiv.classList.remove('show');
        }
    });

    // Initial state
    if (yesRadio.checked) {
        displayDiv.classList.add('show');
    } else {
        displayDiv.classList.remove('show');
    }
});

