const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");
const DEGREESS_FOR_SECONDS_AND_MINUTES = 6;
const DEGREES_FOR_HOURS = 30;

var date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let hrPosition = DEGREES_FOR_HOURS * hours
+ ((DEGREESS_FOR_SECONDS_AND_MINUTES/12) * minutes);
let minPosition = DEGREESS_FOR_SECONDS_AND_MINUTES * minutes
+ ((DEGREESS_FOR_SECONDS_AND_MINUTES/60) * seconds);
let secPosition = DEGREESS_FOR_SECONDS_AND_MINUTES * seconds;

function runTheClock() {
  secPosition = secPosition + DEGREESS_FOR_SECONDS_AND_MINUTES;
  minPosition = minPosition + DEGREESS_FOR_SECONDS_AND_MINUTES/60;
  hrPosition = hrPosition + 3/360;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var updateInterval = setInterval(runTheClock, 1000);
