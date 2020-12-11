const handSec = document.querySelector('.hand-sec');
const handMin = document.querySelector('.hand-min');
const handHr = document.querySelector('.hand-hr');
const digitClock = document.querySelector('.digit-clock');

function test() {
  const time = new Date();
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  handSec.style.transform = `rotate(${((seconds+15)/60)*360}deg)`;
  handMin.style.transform = `rotate(${((minutes+15)/60)*360}deg)`;
  handHr.style.transform = `rotate(${((hours+15)/12)*360}deg)`;
  digitClock.textContent = ((hours > 10) ? hours : '0' + hours) + " : " + ((minutes > 10) ? minutes : '0' + minutes) + " : " + ((seconds > 10) ? seconds : '0' + seconds)
}

setInterval(test, 1000);
