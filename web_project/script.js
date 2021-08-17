function currentTime() {
  let date = new Date();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();
  hour = updateTime(hour);
  minute = updateTime(minute);
  second = updateTime(second);
  document.getElementById("clock").innerText =
    hour + ":" + minute + ":" + second;
  const t = setTimeout(function () {
    currentTime();
  }, 1000);
}
function updateTime(k) {
  if (k < 10) {
    return "0" + k;
  } else {
    return k;
  }
}

currentTime();
