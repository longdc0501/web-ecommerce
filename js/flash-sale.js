var swiperFlashSale = new Swiper(".flash-sale", {
    slidesPerView: 3.2,
    spaceBetween: 8,
});

var timeCountdown = 10;

// declaration
var countdownTime = (timeCountdown) => {
    var displayHour = document.querySelector('#hour');
    var displayMinutes = document.querySelector('#minutes');
    var displaySeconds = document.querySelector('#seconds');
    startTimer(timeCountdown, displayHour, displayMinutes, displaySeconds);
};

var startTimer = (duration, displayHour, displayMinutes, displaySeconds) => {
    var start = Date.now(),
        diff,
        hour,
        minutes,
        seconds;
    var timer = () => {
        // get the number of seconds that have elapsed since
        // startTimer() was called
        diff = duration - (((Date.now() - start) / 1000) | 0);

        // does the same job as parseInt truncates the float
        hour = (diff / 3600) | 0;
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        hour = hour < 10 ? "0" + hour : hour;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        displayHour.textContent = hour;
        displayMinutes.textContent = minutes;
        displaySeconds.textContent = seconds;

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            // start = Date.now() + 1000;
            clearInterval(loop);
            alert("End time sale!")
        }
    }
    // we don't want to wait a full second before the timer starts
    timer();
    var loop = setInterval(timer, 1000);
}

// call function countdown
window.onload = countdownTime(timeCountdown);