const navBar = document.querySelector('.navbar-container')

window.onscroll = function () {
    scrollFunc()
}

function scrollFunc() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        navBar.style.padding = "10px";
        navBar.style.background = '#212529'
    } else {
        navBar.style.padding = "30px";
        navBar.style.background = 'none'
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

var owl = $('#footer-carousel');
owl.owlCarousel({
    items: 8,
    loop: true,
    dots: false,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        476: {
            items: 1
        },
        768: {
            items: 3
        },
        1000: {
            items: 6
        }
    }
});
