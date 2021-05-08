let status = "stopped";
let timemilisec = 0;
let timesec = 0;
let timemin = 0;
let timehr = 0;

let displaymilisec = 0;
let displaysec = 0;
let displaymin = 0;
let displayhr = 0;

function Autocall() {
  timemilisec++;
  if (timemilisec / 100 === 1) {
    timemilisec = 0;
    timesec++;
    if (timesec / 60 === 1) {
      timesec = 0;
      minutes++;
      if (timemin / 60 === 1) {
        timemin = 0;
        hours++;
      }
    }
  }
  if (timemilisec < 10) {
    displaymilisec = "0" + timemilisec;
  } else {
    displaymilisec = timemilisec;
  }
  if (timemin < 10) {
    displaysec = "0" + timesec;
  } else {
    displaysec = timesec;
  }
  if (timemin < 10) {
    displaymin = "0" + timemin;
  } else {
    displaymin = timemin;
  }
  if (timehr < 10) {
    displayhr = "0" + timehr;
  } else {
    displayhr = timehr;
  }
  //Display updated time values to user
  document.getElementById("display").innerHTML =
    displayhr + ":" + displaymin + ":" + displaysec + ":" + displaymilisec;
}

let startStop = function () {
  if (status === "stopped") {
    document.getElementById("manage").innerText = "Stop";
    Stopfncn = window.setInterval(Autocall, 1);
    status = "started";
  } else {
    document.getElementById("manage").innerText = "Start";
    window.clearInterval(Stopfncn);
    status = "stopped";
  }
};
function Reset() {
  window.clearInterval(Stopfncn);
  timemilisec = 0;
  timesec = 0;
  timemin = 0;
  timehr = 0;
  document.getElementById("display").innerHTML = "00:00:00:00";
  document.getElementById("manage").innerText = "Start";
}
