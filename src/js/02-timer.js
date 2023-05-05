import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),
  field: document.querySelectorAll('.field'),

  timer: document.querySelector('.timer'),

  datetimePicker: document.getElementById('datetime-picker'),

  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),

  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

refs.timer.style.display = 'flex';
refs.timer.style.gap = '15px';

refs.value.forEach(el => {
  el.style.display = 'block';
  el.style.fontSize = '30px';
});
refs.label.forEach(el => (el.style.display = 'block'));
refs.field.forEach(el => (el.style.textAlign = 'center'));

refs.start.disabled = true;
refs.stop.disabled = true;

let pickedDate = '';
let intervalId = null;

const timer = {
  start() {
    const startTime = pickedDate;
    refs.start.disabled = true;
    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = convertTimeComponents(startTime - currentTime);
      updateTimer(deltaTime);
      refs.stop.disabled = false;
    }, 1000);
  },

  stop() {
    clearInterval(intervalId);
    updateTimer({ days: '00', hours: '00', mins: '00', secs: '00' });
    refs.stop.disabled = true;
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      return Notiflix.Notify.failure('Please choose a date in the future');
    }
    refs.start.disabled = false;
  },
};

flatpickr(refs.datetimePicker, options);

refs.datetimePicker.addEventListener('input', e => {
  pickedDate = new Date(e.currentTarget.value).getTime();
});

refs.start.addEventListener('click', timer.start);
refs.stop.addEventListener('click', timer.stop);

function updateTimer({ days, hours, mins, secs }) {
  refs.day.textContent = `${days}`;
  refs.hour.textContent = `${hours}`;
  refs.minute.textContent = `${mins}`;
  refs.second.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertTimeComponents(timeInMilliseconds) {
  const ONE_SECOND_IN_MILLISECONDS = 1000;
  const ONE_MINUTE_IN_MILLISECONDS = ONE_SECOND_IN_MILLISECONDS * 60;
  const ONE_HOUR_IN_MILLISECONDS = ONE_MINUTE_IN_MILLISECONDS * 60;
  const ONE_DAY_IN_MILLISECONDS = ONE_HOUR_IN_MILLISECONDS * 24;

  const days = pad(Math.floor(timeInMilliseconds / ONE_DAY_IN_MILLISECONDS));
  const hours = pad(
    Math.floor(
      (timeInMilliseconds % ONE_DAY_IN_MILLISECONDS) / ONE_HOUR_IN_MILLISECONDS
    )
  );
  const mins = pad(
    Math.floor(
      (timeInMilliseconds % ONE_HOUR_IN_MILLISECONDS) /
        ONE_MINUTE_IN_MILLISECONDS
    )
  );
  const secs = pad(
    Math.floor(
      (timeInMilliseconds % ONE_MINUTE_IN_MILLISECONDS) /
        ONE_SECOND_IN_MILLISECONDS
    )
  );

  return { days, hours, mins, secs };
}
