window.addEventListener("scroll", function() {
    let nav = document.querySelector('.menu')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    let nav = document.querySelector('.menu-mobile')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})

window.addEventListener("scroll", function() {
    let nav = document.querySelector('.scroll')
    nav.classList.toggle('rolagem',window.scrollY > 0)
})

function botaomenu() {
    if (menuretratil.style.display == 'block') {
        menuretratil.style.display = 'none'
    } else {
        menuretratil.style.display = 'block'
    }
}
