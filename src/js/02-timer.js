const refs = {
  value: document.querySelectorAll('.value'),
  label: document.querySelectorAll('.label'),
  field: document.querySelectorAll('.field'),

  timer: document.querySelector('.timer'),

  datetimePicker: document.getElementById('datetime-picker'),

  start: document.querySelector('[data-start]'),

  days: document.querySelector('[data-days]'),
  hours: document.querySelector('[data-hours]'),
  minutes: document.querySelector('[data-minutes]'),
  seconds: document.querySelector('[data-seconds]'),
};

refs.timer.style.display = 'flex';
refs.timer.style.gap = '15px';

refs.value.forEach(el => {
  el.style.display = 'block';
  el.style.fontSize = '30px';
});
refs.label.forEach(el => (el.style.display = 'block'));
refs.field.forEach(el => (el.style.textAlign = 'center'));

let pickedDate = '';

refs.datetimePicker.addEventListener('input', e => {
  pickedDate = e.currentTarget.value;
  console.log(pickedDate);
});

refs.start.addEventListener('click', onStartClick);

function onStartClick() {
  refs.start.disabled = true;
}
