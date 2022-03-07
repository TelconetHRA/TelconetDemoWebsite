const navBar = document.querySelector('.navbar-container')
const mediaIcon = document.querySelector('.media-nav-icon')
const navContentRight = document.querySelector('.media-nav-content-right')
const mobileDrop = document.querySelectorAll('.mobile-drop')
const mediaDropList = document.querySelectorAll('.media-drop-list')
const mediaNavContentRight = document.querySelector('.media-nav-content-right')

window.onscroll = function () {
    scrollFunc()
}

function scrollFunc() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navBar.style.padding = "10px";
        navBar.style.background = '#212529'
        mediaNavContentRight.style.width = '100%'
        mediaNavContentRight.style.top = '55px'
        mediaNavContentRight.style.left = '0px'
    } else {
        navBar.style.padding = "30px";
        navBar.style.background = 'none'
        mediaNavContentRight.style.top = '100px'
        mediaNavContentRight.style.width = '95%'
        mediaNavContentRight.style.left = '10px'
    }
}

$('#customer-carousel').owlCarousel({
    loop: true,
    margin: 18,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        476: {
            items: 1
        },
        768: {
            items: 2
        }
    }
})

let owl = $('#footer-carousel');
owl.owlCarousel({
    items: 8,
    loop: true,
    dots: false,
    margin: 10,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        476: {
            items: 2
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});



mediaIcon.addEventListener('click', () => {
   
    if(navContentRight.style.display === "none"){
        navContentRight.style.display = 'block'

    }else{
        navContentRight.style.display = 'none'
    }
})


mobileDrop[0].addEventListener('click',()=>{
    if(mediaDropList[0].style.display === "none"){
        mediaDropList[0].style.display = 'block'
    }else{
        mediaDropList[0].style.display = 'none'
    }
})

mobileDrop[1].addEventListener('click',()=>{
    if(mediaDropList[1].style.display === "none"){
        mediaDropList[1].style.display = 'block'
    }else{
        mediaDropList[1].style.display = 'none'
    }
})

mobileDrop[2].addEventListener('click',()=>{
    if(mediaDropList[2].style.display === "none"){
        mediaDropList[2].style.display = 'block'
    }else{
        mediaDropList[2].style.display = 'none'
    }
})
