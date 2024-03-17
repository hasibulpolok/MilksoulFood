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




  // Function to simulate loading
function showLoader() {
    // Show loader
    document.getElementById('loader').style.display = 'block';
    // Simulate loading time (you can replace this with actual AJAX request)
    setTimeout(hideLoader, 2000); // Assuming it takes 2 seconds to load
}

function hideLoader() {
    // Hide loader
    document.getElementById('loader').style.display = 'none';
    // Display search results
    displaySearchResults();
}

function displaySearchResults() {
    // Simulated search results
    const results = [
        { name: 'Shop 1', address: '123 Main St' },
        { name: 'Shop 2', address: '456 Elm St' },
        { name: 'Shop 3', address: '789 Oak St' }
    ];

    const resultsContainer = document.getElementById('searchResults');
    // Clear previous results
    resultsContainer.innerHTML = '';

    // Display each result
    results.forEach(result => {
        const shopElement = document.createElement('div');
        shopElement.innerHTML = `
            <p><strong>${result.name}</strong></p>
            <p>${result.address}</p>
        `;
        // Make shop name and address clickable
        shopElement.addEventListener('click', () => {
            // Navigate to another page (you can set the URL dynamically based on shop)
            window.location.href = 'another_page.html';
        });
        resultsContainer.appendChild(shopElement);
    });
}

window.onload = function () {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', showLoader);
};
