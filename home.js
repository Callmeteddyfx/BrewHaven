const burger = document.querySelector('.burger');
const hiddenDiv = document.querySelector('.hidden-div');
const hiddenDivs = document.querySelectorAll('.hidden-div');

burger.addEventListener('click', () => {
  hiddenDiv.classList.toggle('visible'); // Toggles visibility
  burger.classList.toggle('active');
  
  hiddenDivs.forEach(function(div) {
    const computedStyle = window.getComputedStyle(div); // Get the computed styles for the element
    const displayValue = computedStyle.display; // Get the 'display' value

    if (displayValue === 'none') {
        document.body.style.overflowY = 'auto';
    } else {
      document.body.style.overflowY = 'hidden';
    }
  });
});