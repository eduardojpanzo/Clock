const stopwatchElements = `
<div id="stopwatch" class="stopwatch">
<h1>Cronómetro</h1>

<div class="time">
    <span class="hr">-</span>:
    <span class="min">-</span>:
    <span class="sec">-</span>:
    <span class="mil">-</span>
</div>

<div class="btns">
    <button class="btn bg-green start" onclick="handleStartCount()">Iniciar</button>
    <button class="btn bg-red stop" onclick="handlePauseCount()">Pausar</button>
    <button class="btn bg-black begin" onclick="handleStopCount()">Zerar</button>
</div>
</di>
`;

document.querySelector("#app .container").innerHTML = stopwatchElements;

let stopwatchInterval,
  milliseconds = 0,
  seconds = 0,
  minute = 0,
  hour = 0,
  notAccount = true;

function handleStartCount() {
  if (notAccount) {
    notAccount = false;
    stopwatchInterval = setInterval(() => {
      setMilliSecondsValue();

      setSecondsValue();

      setMinuteValue();

      setHoursValue();
    }, 10);
  } else {
    alert("Ja esta a Contar");
  }
}

function handlePauseCount() {
  if (!notAccount) {
    notAccount = true;
    clearInterval(stopwatchInterval);
    setTimeout(() => {
      document.querySelector(".btn.start").classList.add("resume");
      document.querySelector(".btn.start").innerText = "Continuar";
    }, 200);
  } else {
    alert("Ja esta em Pausa");
  }
}

function handleStopCount() {
  clearInterval(stopwatchInterval);
  mil.innerText = "-";
  sec.innerText = "-";
  min.innerText = "-";
  notAccount = true;
  milliseconds = 0;
  seconds = 0;
  minute = 0;
  setTimeout(() => {
    document.querySelector(".btn.start").classList.remove("resume");
    document.querySelector(".btn.start").innerText = "Iniciar";
  }, 200);
}

function setHoursValue() {
  if (minute === 60) {
    hour++;
    minute = 0;
    document.querySelector("#stopwatch .time .hr").innerHTML = hour;
  }
}

function setMinuteValue() {
  if (seconds === 60) {
    minute++;
    seconds = 0;
    document.querySelector("#stopwatch .time .min").innerHTML = minute;
  }
}

function setSecondsValue() {
  if (milliseconds === 1000) {
    seconds++;
    milliseconds = 0;
    document.querySelector("#stopwatch .time .sec").innerHTML =
      seconds === 60 ? "00" : seconds < 10 ? `0` + seconds : seconds;
  }
}

function setMilliSecondsValue() {
  milliseconds += 10;
  document.querySelector("#stopwatch .time .mil").innerHTML = milliseconds / 10;
}
