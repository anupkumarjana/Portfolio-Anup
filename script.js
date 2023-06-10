var aboutSection = document.getElementById('about');
var aboutContent = document.querySelector('.about-col-2');
var readMoreButton = document.createElement('button');
readMoreButton.classList.add('read-more-button');
readMoreButton.textContent = 'Read More';

readMoreButton.addEventListener('click', function() {
  aboutContent.classList.toggle('expanded');
});

aboutSection.appendChild(readMoreButton);



$(document).ready(function() {
    $('.menu-icon').click(function() {
      $('nav').toggleClass('menu-open');
    });
  });
  