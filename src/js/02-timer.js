// Описан в документации
import flatpickr from 'flatpickr';
// Дополнительный импорт стилей
import 'flatpickr/dist/flatpickr.min.css';

let date;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      alert('Please choose a date in the future');
    } else {
      date = selectedDates[0];
      startButton.disabled = false;
    }
  },
};
const inputEl = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');
let interval = null;

startButton.disabled = true;

startButton.addEventListener('click', onStartButtonClick);

function onStartButtonClick() {
  interval = setInterval(() => {
    const deltaTime = convertMs(date - Date.now());
    daysEl.textContent = addLeadingZero(deltaTime.days);
    hoursEl.textContent = addLeadingZero(deltaTime.hours);
    minutesEl.textContent = addLeadingZero(deltaTime.minutes);
    secondsEl.textContent = addLeadingZero(deltaTime.seconds);
  }, 1000);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
flatpickr(inputEl, options);
