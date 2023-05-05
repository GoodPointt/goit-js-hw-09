const refs = {
  startBtn: document.querySelector('[data-start]'),
  stopBtn: document.querySelector('[data-stop]'),
};

const INTERVAL = 1000;
let timerId = null;

refs.stopBtn.disabled = true;

refs.startBtn.addEventListener('click', onStartClick);
refs.stopBtn.addEventListener('click', onStopClick);

function onStartClick() {
  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;
  changeBgColor();

  timerId = setInterval(() => {
    changeBgColor();
  }, INTERVAL);
}

function onStopClick() {
  refs.stopBtn.disabled = true;
  refs.startBtn.disabled = false;

  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBgColor() {
  document.body.style.backgroundColor = getRandomHexColor();
}
