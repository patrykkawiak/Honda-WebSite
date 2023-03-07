const mobile = document.querySelector('.mobile-nav');
const navBtn = document.querySelector('.burger-btn');
const links = document.querySelectorAll('.mobile-link');
const h1 = document.querySelector('.point-set')
const handleNav = () => {
    mobile.classList.toggle('mobile-nav--active');


}


links.forEach(item => {
    item.addEventListener('click', () => {
        mobile.classList.remove('mobile-nav--active');
    })
})



navBtn.addEventListener('click', handleNav);

document.addEventListener('DOMContentLoaded', function () {

    const nav = document.querySelector('.nav')

    function addShadow() {
        if (window.scrollY >= 150) {
            nav.classList.add('nav--active')
        } else {
            nav.classList.remove('nav--active')
        }
    }

    window.addEventListener('scroll', addShadow)
})

