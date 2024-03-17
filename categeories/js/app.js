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





