import flatpickr from 'flatpickr';
import Notiflix from 'notiflix';
import 'flatpickr/dist/flatpickr.min.css';

const refs = {
  timer: document.querySelector('.timer'),

  datetimePicker: document.getElementById('datetime-picker'),

  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),

  day: document.querySelector('[data-days]'),
  hour: document.querySelector('[data-hours]'),
  minute: document.querySelector('[data-minutes]'),
  second: document.querySelector('[data-seconds]'),
};

refs.start.disabled = false;
refs.stop.disabled = true;

let intervalId = null;

const timer = {
  start() {
    const startTime = new Date(refs.datetimePicker.value).getTime();
    refs.start.disabled = true;

    intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = startTime - currentTime;
      if (deltaTime < 0) return timer.stop();
      convertedDeltaTime = convertTimeComponents(deltaTime);
      updateTimer(convertedDeltaTime);
      refs.stop.disabled = false;
    }, 1000);
    successMsg(intervalId, startTime);
  },

  stop() {
    clearInterval(intervalId);
    refs.stop.disabled = true;
    refs.datetimePicker.value = 'Choose date to countdown';
    warningMsg();
    updateTimer({ days: '00', hours: '00', mins: '00', secs: '00' });
  },
};

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      return warningMsg();
    }
    refs.start.disabled = false;
  },
};

flatpickr(refs.datetimePicker, options);

// refs.datetimePicker.addEventListener('input', e => {
//   pickedDate =
// });

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

function warningMsg() {
  return Notiflix.Notify.warning('Please choose a date in the future');
}

function successMsg(id, startTime) {
  if (id !== null && startTime - Date.now() > 0)
    return Notiflix.Notify.success('Count down started!');
}
