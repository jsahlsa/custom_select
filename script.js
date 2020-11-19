/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
window.addEventListener('load', function() {
  let form = document.querySelector('form');
  
  form.classList.remove('no-widget');
  form.classList.add('widget');
})