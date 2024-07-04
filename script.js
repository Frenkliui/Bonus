document.getElementById('spinButton').addEventListener('click', function() {
    const bonuses = [
        '10% off your next purchase!',
        'Free shipping on your next order!',
        'Buy one get one free!',
        '20% off on selected items!',
        '5% off your entire order!',
        'No bonus today, try again tomorrow!'
    ];

    const randomIndex = Math.floor(Math.random() * bonuses.length);
    const result = bonuses[randomIndex];

    document.getElementById('result').innerText = result;

    // Store the date of the last spin to prevent multiple spins in a single day
    const today = new Date().toDateString();
    localStorage.setItem('lastSpinDate', today);
});

document.addEventListener('DOMContentLoaded', function() {
    const lastSpinDate = localStorage.getItem('lastSpinDate');
    const today = new Date().toDateString();

    if (lastSpinDate === today) {
        document.getElementById('spinButton').disabled = true;
        document.getElementById('result').innerText = 'You have already played today. Come back tomorrow!';
    }
});
