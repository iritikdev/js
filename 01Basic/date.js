function startTime() {
  const today = new Date();
  let { hour, minute, second } = {
    hour: today.getHours(),
    minute: today.getMinutes(),
    second: today.getSeconds(),
  };

  minute = formatTime(minute);
  second = formatTime(second);
  let meridian = hour >= 12 ? "PM" : "AM";
  document.getElementById("date").innerHTML =
    hour + ":" + minute + ":" + second + meridian;
  setTimeout(startTime, 1000);
}

function formatTime(i) {
  // add zero in front of numbers < 10
  return i < 10 ? "0" + i : i;
}

document.getElementById("date").addEventListener("load", startTime());
