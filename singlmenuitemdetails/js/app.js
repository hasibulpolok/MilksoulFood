document.addEventListener('DOMContentLoaded', function () {
    let menuHover = document.getElementById('menu-hover');
    let dropdownMenu = menuHover.querySelector('.dropdown-menu');

    // Show dropdown on hover
    menuHover.addEventListener('mouseover', function () {
        dropdownMenu.style.display = 'block';
    });

    // Hide dropdown on mouseout
    menuHover.addEventListener('mouseout', function () {
        dropdownMenu.style.display = 'none';
    });

    // Add click event listeners to submenu links
    let submenuLinks = dropdownMenu.querySelectorAll('a');
    submenuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            
            let href = link.getAttribute('href');
            if (href) {
                window.location.href = href;
            }
        });
    });
});



//  selecte single sides  on breakfastdetailspage/order

document.querySelectorAll('.selected').forEach(item => {
    item.addEventListener('click', event => {
        item.classList.toggle('active');
    })
});

// this is for show transition on make it combo btn 










////////code for single details hover and add

function arrowHover() {
    document.getElementById('arrowIcon').classList.add("arrow-hover");
}

function arrowOut() {
    document.getElementById('arrowIcon').classList.remove("arrow-hover");
}

function addToOrder() {
    
    console.log("Added to order!");
}