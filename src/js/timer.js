const timerElements = `
<div id="timer" class="timer">
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

document.querySelector("#app .container").innerHTML = timerElements;

let btnStart = document.querySelector(".item.start");

let timer,
  milliseconds = 0,
  seconds = 0,
  minute = 0,
  notAccount = true;

function handleStartCount() {
  if (notAccount) {
    notAccount = false;
    timer = setInterval(() => {
      milliseconds += 10;
      setMilliSecondsValue(milliseconds);
      if (milliseconds === 1000) {
        seconds++;
        setSecondsValue(seconds);
        if (seconds === 60) {
          minute++;
          setMinuteValue(minute);
          seconds = 0;
        }
        milliseconds = 0;
      }
    }, 10);
  } else {
    alert("Ja esta a Contar");
  }
}

function handlePauseCount() {
  if (!notAccount) {
    notAccount = true;
    clearInterval(timer);
    setTimeout(() => {
      document.querySelector(".btn.start").classList.add("resume");
      document.querySelector(".btn.start").innerText = "Continuar";
    }, 200);
  } else {
    alert("Ja esta em Pausa");
  }
}

function handleStopCount() {
  clearInterval(timer);
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

function setHoursValue(value) {
  document.querySelector("#timer .time .hr").innerHTML = value;
}
function setMinuteValue(value) {
  document.querySelector("#timer .time .min").innerHTML = value;
}
function setSecondsValue(value) {
  document.querySelector("#timer .time .sec").innerHTML = value;
}
function setMilliSecondsValue(value) {
  document.querySelector("#timer .time .mil").innerHTML = value;
}

function handle(params) {}
