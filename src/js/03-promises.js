function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    let delays =
      Number(delayEl.value) + Number(stepEl.value) * (promiseCounter - 1);
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve(`✅ Fulfilled promise ${position} in ${delays}ms`);
      } else {
        // Reject\
        reject(`❌ Rejected promise ${position} in ${delays}ms`);
      }
    }, delay);
  });
}

const delayEl = document.querySelector('input[name="delay"]');
const stepEl = document.querySelector('input[name="step"]'); //delay
const amountEl = document.querySelector('input[name="amount"]'); //position
const formEl = document.querySelector('form');
const buttonEl = document.querySelector('button');
let promiseCounter = 1;
let timerId = null;

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();
  buttonEl.disabled = true;

  setTimeout(() => {
    showPromises();
    timerId = setInterval(() => {
      showPromises();
    }, stepEl.value);
  }, delayEl.value);
}

function showPromises() {
  const promise = createPromise(promiseCounter, delayEl.value);

  promiseCounter += 1;

  if (promiseCounter > Number(amountEl.value)) {
    clearInterval(timerId);
    promiseCounter = 1;
    buttonEl.disabled = false;
  }

  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.log(error);
    });
}
