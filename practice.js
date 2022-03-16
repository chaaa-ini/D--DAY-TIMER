const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`December 24 ${currentYear} 00:00:00`);

console.log(newYearTime);

function countDownTime() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const s = Math.floor(diff / 1000) % 60;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const h = Math.floor(diff / 1000 / 60) % 24;
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);

  days.innerText = String(d).padStart(3, "0");
  hours.innerText = String(h).padStart(2, "0");
  minutes.innerText = String(m).padStart(2, "0");
  seconds.innerText = String(s).padStart(2, "0");
}

countDownTime();
setInterval(countDownTime, 1000);
