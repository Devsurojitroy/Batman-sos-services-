document.getElementById('sosButton').addEventListener('click', function() {
    if (confirm("Are you sure you want to send an SOS signal to Batman?")) {
        startCountdown();
    } else {
        document.getElementById('responseMessage').textContent = "SOS signal canceled.";
    }
});

function startCountdown() {
    const countdownElement = document.getElementById('countdown');
    const countdownTimer = document.getElementById('countdownTimer');
    let countdownValue = 5;
    
    countdownElement.classList.remove('hidden');

    const countdownInterval = setInterval(function() {
        countdownValue--;
        countdownTimer.textContent = countdownValue;

        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            countdownElement.classList.add('hidden');
            sendSOS();
        }
    }, 1000);
}

function sendSOS() {
    const responseElement = document.getElementById('responseMessage');
    const batSignal = document.getElementById('batSignal');
    const sosSound = document.getElementById('sosSound');
    const loadingElement = document.getElementById('loading');

    responseElement.textContent = "";
    loadingElement.classList.remove('hidden');

    // Simulate sending SOS with a delay
    setTimeout(function() {
        loadingElement.classList.add('hidden');
        batSignal.classList.remove('hidden');
        sosSound.play();

        setTimeout(function() {
            batSignal.classList.add('hidden');
            responseElement.textContent = "Batman has received your signal! Help is on the way!";
        }, 5000);
    }, 3000);
}