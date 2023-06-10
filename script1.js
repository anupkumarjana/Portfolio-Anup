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
