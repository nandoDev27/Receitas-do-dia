let menuBtn = document.querySelector('#btnMenu')
let menu = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    if (menu.style.display === 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
})

