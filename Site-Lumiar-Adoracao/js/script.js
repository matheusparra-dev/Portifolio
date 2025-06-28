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
        recolher();
        sebotaomenu();
    }

    function recolher() {
        if (menuretratil.style.display == 'block') {
            menuretratil.style.display = 'none'
        } else {
            menuretratil.style.display = 'block'
        }
    }

    function sebotaomenu() {
        const elemento = document.getElementById("icone-menu");
        if (elemento == "menu") {
            xbotaomenu();
        } else {
            mbotaomenu();
        }
    }


    function xbotaomenu() {
        const elemento2 = document.getElementById("icone-menu");
        elemento2.innerHTML = "close";
    }

    function mbotaomenu() {
        const elemento2 = document.getElementById("icone-menu");
        elemento2.innerHTML = "menu";
    }