const menuBtn = document.getElementById('menu-btn')
const backBtns = document.querySelectorAll('#back-btn')
const closeBtn = document.getElementById('close-btn')
const mobileMenu = document.getElementById('mobile-menu')
const servicesBtn = document.getElementById('services-btn')
const servicesList = document.getElementById('services-list')
const mobMenuList = document.getElementById('mobile-menu-list')

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