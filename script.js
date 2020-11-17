/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
const form = document.getElementsByTagName('form')[0];
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function(e) {
  if (email.validity.valid) {
    emailError.innerHTML = '';
    emailError.className = 'error';
  } else {
    showError();
  }
});

form.addEventListener('submit', function(e) {
  
  if (!email.validity.valid) {
    show
  }
})