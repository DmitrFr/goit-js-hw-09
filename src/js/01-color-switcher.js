const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
stopButton.disabled = true;
interval = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onStartBtnClick = function () {
  interval = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  startButton.disabled = true;
  stopButton.disabled = false;
};

const onStopBtnClick = function () {
  clearInterval(interval);
  startButton.disabled = false;
  stopButton.disabled = true;
};

startButton.addEventListener('click', onStartBtnClick);
stopButton.addEventListener('click', onStopBtnClick);
