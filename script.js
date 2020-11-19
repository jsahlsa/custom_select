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
  
  optList.classList.add('hidden');
  
  select.classList.remove('active');
}

function activeSelect(select, selectList) {
  if (select.classList.contains('active')) return;
  
  selectList.forEach(deactivateSelect);
  
  select.classList.add('active');
}

function toggleOptList(select) {
  let optList = select.querySelector('.optList');
  optList.classList.toggle('hidden');
}

function highlightOption(select, option) {
  let optionList = select.querySelector('.option');
  
  optionList.forEach(function(other) {
    other.classList.remove('highlight');
  });
  
  option.classList.add('highlight');
};

window.addEventListener('load', function() {
  let selectList = document.querySelectorAll('.select');
  
  selectList.forEach(function(select) {
    let optionList = 
  })
})