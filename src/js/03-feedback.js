import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');

const registrationData = {};

formEl.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget);
  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    return alert('все поля должны быть заполнены');
  }
  registrationData.email = email.value;
  registrationData.message = message.value;

  console.log(registrationData);
  event.currentTarget.reset();
}
