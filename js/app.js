

const swiper = new Swiper('.swiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },

    
});


document.getElementsByClassName('newswiper');
const swiper1 = new Swiper('.newswiper', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.newswiper-pagination',
        
    },

    // Navigation arrows
    navigation: {
        nextEl: '.newswiper-button-next',
        prevEl: '.newswiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.newswiper-scrollbar',
    },

    
});


function rangeSlider(value){
    document.getElementById('rangeValue').innerHTML=value;
};

function rangeSlider2(value){
    document.getElementById('rangeValue2').innerHTML=value;
}

function chnageTab(){
    document.getElementsByClassName('herostyle').style.fontSize=40;
    document.getElementsByClassName('herostyle').style.fontWeight="bold";
}