import Notiflix from 'notiflix';

const formRef = document.querySelector('.form');

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

  for (position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
