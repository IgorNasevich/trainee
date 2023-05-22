document.addEventListener('DOMContentLoaded', function() {
    // конечная дата, например 1 июля 2021
    const deadline = new Date(2023, 4, 31);
    // id таймера
    let timerId = null;
    // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
    function countdownTimer() {
      const diff = deadline - new Date();


      //  const days = 0;
      // const hours = 0;
      // const minutes = 0;
      // const seconds = 0;

      // if (diff <= 0) {
      //   clearInterval(timerId);
      // }

      // if(diff > 0){
      //   days = Math.floor(diff / 1000 / 60 / 60 / 24);
      // }
      // else {
      //   days = 0;
      // }

      // if(diff > 0){
      //   hours = Math.floor(diff / 1000 / 60 / 60) % 24;
      // }
      // else {
      //   hours = 0;
      // }

      // if(diff > 0){
      //   minutes =  Math.floor(diff / 1000 / 60) % 60;
      // }
      // else {
      //   minutes = 0;
      // }

      // if(diff > 0){
      //   seconds = Math.floorMath.floor(diff / 1000) % 60;
      // }
      // else {
      //   seconds = 0;
      // }
      // if (diff <= 0) {
      //   clearInterval(timerId);
      // }
      
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      elemDays.textContent = days < 10 ? '0' + days : days;
      elemHours.textContent = hours < 10 ? '0' + hours : hours;
      elemMinutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      elemSeconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    // получаем элементы, содержащие компоненты даты
    const elemDays = document.querySelector('.timer__days');
    const elemHours = document.querySelector('.timer__hours');
    const elemMinutes = document.querySelector('.timer__minutes');
    const elemSeconds = document.querySelector('.timer__seconds');
    // вызываем функцию countdownTimer
    countdownTimer();
    // вызываем функцию countdownTimer каждую секунду
    timerId = setInterval(countdownTimer, 1000);
  });