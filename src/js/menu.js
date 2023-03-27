const menuBtn = document.getElementById('menu-btn')
const backBtns = document.querySelectorAll('#back-btn')
const closeBtn = document.getElementById('close-btn')
const mobileMenu = document.getElementById('mobile-menu')
const servicesBtn = document.getElementById('services-btn')
const servicesList = document.getElementById('services-list')
const mobMenuList = document.getElementById('mobile-menu-list')
const services = document.getElementById('services')
const menuDesktopBtns = document.querySelectorAll('#open-desktop-menu-btn')
const body = document.getElementById('body')

body.addEventListener('click', e => {
    if(!(e.target.classList.contains('header__services-link') || 
    e.target.classList.contains('header__services') || 
    e.target.classList.contains('header__nav-arrowDown-btn')) 
    && services.hidden === false) {
            removeClass()
            services.hidden = true
        }
})

menuBtn.addEventListener('click', e => {
    mobileMenu.hidden = false
})
closeBtn.addEventListener('click', e => {
    mobileMenu.hidden = true
})
servicesBtn.addEventListener('click', e => {
    servicesList.hidden = false
    mobMenuList.hidden = true
})

backBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        const currentList = e.currentTarget.parentElement.parentElement
        currentList.hidden = true
        mobMenuList.hidden = false
    })
})

menuDesktopBtns.forEach(btn => {
        btn.addEventListener('click', e => {
        removeClass()
        const arrow = e.target.firstElementChild
        const currentItem = e.target.parentElement

        arrow.classList.add('rotate')
        currentItem.classList.add('active')

        services.hidden = false
    })
})

function removeClass() {
    menuDesktopBtns.forEach(btn => {
        const arrow = btn.firstElementChild
        const currentItem = btn.parentElement
        
        if(currentItem.classList.contains('active')) {
            arrow.classList.remove('rotate')
            currentItem.classList.remove('active')
        }
    })
}