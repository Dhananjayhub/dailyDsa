function startCountdown(duration) {
    var timer = duration, minutes, seconds;
    var countdownInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        console.log(minutes + ":" + seconds);

        if (--timer < 0) {
            clearInterval(countdownInterval);
            console.log("TIME UP!");
        }
    }, 1000);
}


    let prompt = require('prompt-sync')()
    const countdownDuration = parseInt(prompt("Enter the countdown duration in seconds: "));
    startCountdown(countdownDuration);
