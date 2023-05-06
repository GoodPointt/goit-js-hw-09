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
  btnDisabledSwitcher(true);
  changeBgColor();

  timerId = setInterval(() => {
    changeBgColor();
  }, INTERVAL);
}

function onStopClick() {
  btnDisabledSwitcher(false);
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

function btnDisabledSwitcher(boolean) {
  refs.startBtn.disabled = boolean;
  refs.stopBtn.disabled = !boolean;
}
