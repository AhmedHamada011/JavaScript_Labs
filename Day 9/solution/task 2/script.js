var clock = document.getElementById("clock");
var postfix = document.getElementById("postfix");
var set = document.getElementById("set");
var clear = document.getElementById("clear");

window.onload = function () {
  setInterval(function () {
    var time = new Date();

    clock.innerText = time.toLocaleTimeString().replace(/PM|AM/, "");
    postfix.innerText = time
      .toLocaleTimeString()
      .replace(/([\d]+:[\d]{2})(:[\d]{2})/, "");

    var days = document.getElementsByClassName("day");

    for (day of days) {
      if (day.innerText === getFullDay(time.getDay()))
        day.classList.remove("opacity-50");
    }
  }, 1000);
};

function getFullDay(day) {
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thu", "Fri", "Sat"];

  return weekday[day];
}

set.addEventListener("click", function () {
  var hours = Number(document.getElementById("hours").value);
  var minutes = Number(document.getElementById("minutes").value);
  var seconds = Number(document.getElementById("seconds").value);

  var milliseconds = (hours * 60 * 60 + minutes * 60 + seconds) * 1000;

  console.log(milliseconds);
  setTimeout(function () {
    var audio = new Audio("sound/alarm.wav");
    audio.play();
  }, milliseconds);
});
