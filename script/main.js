const timer = document.querySelector(".timer");
const boomDate = newCountdownDate(14, 9, 30, 0); //il 14 alle 9:30:00
let differenceInMilliseconds = 0;

setInterval(function() {
  const today = new Date();

  differenceInMilliseconds = differenceTodayAndDate(today, boomDate);

  if (differenceInMilliseconds <= 0) {
    return
  }

  updateTimer(differenceInMilliseconds);

  setTimeout(function() {
    document.querySelector(".boom").innerHTML = "Tempo Scaduto!!!";
  }, differenceInMilliseconds)

}, 1000);


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

  timer.innerHTML = hh + " " + mm + " " + ss;
}