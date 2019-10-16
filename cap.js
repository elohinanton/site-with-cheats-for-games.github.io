window.onscroll = function showHeader() {
    let header  = document.querySelector('.header');

    if(window.pageYOffset > 12) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
}