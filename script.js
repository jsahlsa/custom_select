/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
const form = document.querySelector('form');
const email = document.getElementById('email');
const emailError = document.querySelector('#email + span');

email.addEventListener('input', function(e) {
  if (email.validity.valid) {
    emailError.innerHTML = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function(e) {
  if(!email.validity.valid) {
    showError();
    e.preventDefault();
  }
});

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = `Please enter an email address.`;
  } else if (email.validity.typeMismatch) {
    emailError.textContent = 'You need to enter a valid email';
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters, you entered ${ email.value.length }`;
  }
  
  emailError.className = 'error active';
}

