/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
window.addEventListener('load', function() {
  let form = document.querySelector('form');
  
  form.classList.remove('no-widget');
  form.classList.add('widget');
});

NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
}

function deactivateSelect(select) {
  if (!select.classList.contains('active')) return;
  
  let optList = select.querySelector('.optList');
  
  optList.classList.add
}