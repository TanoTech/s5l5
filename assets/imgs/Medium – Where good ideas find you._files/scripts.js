document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector('nav')
    var stayCurious = document.getElementById('stayCurious')

    window.addEventListener('scroll', function () {
        var rect = stayCurious.getBoundingClientRect()

        if (rect.bottom <= 0) {
            nav.classList.add('scrolled')
        } else {
            nav.classList.remove('scrolled')
        }
    })
})