document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 4, 31);
    let timerId = null;
    function countdownTimer() {
      const diff = deadline - new Date();

      let days = 0;
      let hours = 0;
      let minutes = 0;
      let seconds = 0;

      if (diff <= 0) {
        clearInterval(timerId);
      }

      if(diff > 0){
        days = Math.floor(diff / 1000 / 60 / 60 / 24);
      }
      else {
        days = 0;
      }

      if(diff > 0){
        hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      }
      else {
        hours = 0;
      }

      if(diff > 0){
        minutes =  Math.floor(diff / 1000 / 60) % 60;
      }
      else {
        minutes = 0;
      }

      if(diff > 0){
        seconds = Math.floor(diff / 1000) % 60;
      }
      else {
        seconds = 0;
      }

      elemDays.textContent = days < 10 ? '0' + days : days;
      elemHours.textContent = hours < 10 ? '0' + hours : hours;
      elemMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      elemSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    const elemDays = document.querySelector('.timer__days');
    const elemHours = document.querySelector('.timer__hours');
    const elemMinutes = document.querySelector('.timer__minutes');
    const elemSeconds = document.querySelector('.timer__seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  });