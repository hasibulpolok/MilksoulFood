document.addEventListener('DOMContentLoaded', function () {
    var menuHover = document.getElementById('menu-hover');
    var dropdownMenu = menuHover.querySelector('.dropdown-menu');

    // Show dropdown on hover
    menuHover.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block';
    });

    // Hide dropdown on mouseout
    menuHover.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none';
    });

    // Add click event listeners to submenu links
    var submenuLinks = dropdownMenu.querySelectorAll('a');
    submenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            // Get the href attribute and navigate to the corresponding route
            var href = link.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });
});


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsiveClass:true,
    dot:false,
    autoplay:true,
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:false,
            loop:false
        }
    }
})



// increment decrement checkout 
var numberElement = document.getElementById('number');
  var currentNumber = 0;

  function incrementNumber() {
    currentNumber++;
    updateNumber();
  }

  function decrementNumber() {
    if (currentNumber > 0) {
      currentNumber--;
      updateNumber();
    }
  }

  function updateNumber() {
    numberElement.innerText = currentNumber;
  }



