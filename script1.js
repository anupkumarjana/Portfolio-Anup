document.addEventListener("DOMContentLoaded", function() {
  // Get the menu items
  var menuItems = document.querySelectorAll('nav ul li a');

  // Add click event listener to each menu item
  menuItems.forEach(function(menuItem) {
    menuItem.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior

      var targetSectionId = this.getAttribute('href'); // Get the target section ID
      var targetSection = document.querySelector(targetSectionId); // Get the target section element

      // Scroll smoothly to the target section
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed(".text1", {
    strings: ["Frontend Developer", "Backend Developer", "Web Developer", "Software Developer"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 100,
    loop: true
  });
});
