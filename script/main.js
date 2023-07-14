const timerContainer = document.querySelector(".timer");
const boomDate = newCountdownDate(14, 9, 46, 0); //il 14 alle 9:30:00
let differenceInMilliseconds = 0;

const timer = setInterval(function() {
  const today = new Date();

  differenceInMilliseconds = differenceTodayAndDate(today, boomDate);

  updateTimer(differenceInMilliseconds);

  setTimeout(function() {
    document.querySelector(".boom").innerHTML = "Tempo Scaduto!!!";
    clearInterval(timer);
  }, differenceInMilliseconds)

}, 100);




function newCountdownDate(day, hour, minute, second) {
  let newDate = new Date();

  newDate.setDate(day);
  newDate.setHours(hour);
  newDate.setMinutes(minute);
  newDate.setSeconds(second);

  return newDate;
}

function differenceTodayAndDate(currentDate, boomDate) {
  return boomDate.getTime() - currentDate.getTime()
}

function updateTimer(difference) {
  let msec = difference;
  const hh = Math.floor(msec / 1000 / 60 / 60);
  msec -= hh * 1000 * 60 * 60;
  const mm = Math.floor(msec / 1000 / 60);
  msec -= mm * 1000 * 60;
  const ss = Math.floor(msec / 1000);
  msec -= ss * 1000;

  timerContainer.innerHTML = hh + " " + mm + " " + ss;
}