let timer;
let seconds = 0;
let running = false;

// Format time
function formatTime(sec) {
  let hrs = Math.floor(sec / 3600);
  let mins = Math.floor((sec % 3600) / 60);
  let secs = sec % 60;

  return (
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0')
  );
}

// Start
function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      document.getElementById("display").innerText = formatTime(seconds);
    }, 1000);
  }
}

// Pause
function pause() {
  running = false;
  clearInterval(timer);
}

// Reset
function reset() {
  running = false;
  clearInterval(timer);
  seconds = 0;
  document.getElementById("display").innerText = "00:00:00";
  document.getElementById("laps").innerHTML = "";
}

// Lap
function lap() {
  if (running) {
    let li = document.createElement("li");
    li.innerText = formatTime(seconds);
    document.getElementById("laps").appendChild(li);
  }
}