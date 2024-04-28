
function generateRandomNumber() {
    return Math.floor(Math.random() * 100);
}
var delay = 3000;
function generateRandomNumberAfterDelay() {
    var timeLeft = delay / 1000;
    var countdownInterval = setInterval(function() {
        console.log("Time remaining:", timeLeft, "seconds");
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            var randomNumber = generateRandomNumber();
            console.log("Generated random number:", randomNumber);
        }
    }, 1000);
}
setTimeout(generateRandomNumberAfterDelay, delay);
