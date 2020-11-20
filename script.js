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
  let optionList = select.querySelectorAll('.option');
  
  optionList.forEach(function(other) {
    other.classList.remove('highlight');
  });
  
  option.classList.add('highlight');
};

window.addEventListener('load', function() {
  let selectList = document.querySelectorAll('.select');
  
  selectList.forEach(function(select) {
    let optionList = select.querySelectorAll('.option');
    
    optionList.forEach(function(option) {
      option.addEventListener('mouseover', function() {
        highlightOption(select, option);
      });
    });
    select.addEventListener('click', function(e) {
      toggleOptList(select);
    });
    select.addEventListener('focus', function(e) {
      activeSelect(select, selectList);
    });
    select.addEventListener('blur', function(e) {
      deactivateSelect(select);
    });
    select.addEventListener('keyup', function(e) {
      if (e.keyCode === 27) {
        deactivateSelect(select);
      }
    });
  });
});

function updateValue(select, index) {
  let nativeWidget = select.previousElementSibling;
  
  let value = select.querySelector('.value');
  
  let optionList = select.querySelectorAll('.option');
  
  nativeWidget.selectedIndex = index;
  
  value.innerHTML = optionList[index].innerHTML;
  
  highlightOption(select, optionList[index]);
};

function getIndex(select) {
  let nativeWidget = select.previousElementSibling;
  
  return nativeWidget.selectedIndex;
};

window.addEventListener('load', function() {
  let selectList = document.querySelectorAll('.option');
  
  selectList.forEach(function(select) {
    let optionList = select.querySelectorAll('option'),
        selectedIndex = getIndex(select);
    
    select.tabIndex = 0;
    
    select.previousElementSibling.tabIndex = -1;
    
    updateValue(select, selectedIndex);
    
    optionList.forEach(function(option, index) {
      option.addEventListener('click', function(e))
    })
  });
});

