import Notiflix from 'notiflix';

formRef = document.querySelector('.form');

let position = 0;

formRef.addEventListener('submit', onClickCreatePromiseBtn);

function onClickCreatePromiseBtn(e) {
  e.preventDefault();

  let delay = Number(formRef.delay.value);
  let step = Number(formRef.step.value);
  let amount = Number(formRef.amount.value);

  if (delay < 0 || step < 0 || amount <= 0) {
    return Notiflix.Notify.warning('Please enter correct value!');
  }

  for (position = 0; position < amount; position += 1) {
    createPromise(position, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    // Fulfill
    Notiflix.Notify.success('YUEP!');
  } else {
    // Reject
    Notiflix.Notify.failure('NOPE!');
  }
}
