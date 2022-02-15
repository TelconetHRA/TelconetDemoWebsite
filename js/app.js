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