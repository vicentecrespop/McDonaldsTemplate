function changeNavbarButton() {
    const burguerSvg = document.querySelector('svg.navbar-midia--open')
    burguerSvg.classList.toggle('navbar-midia--open--active')

    const closeSvg = document.querySelector('svg.navbar-midia--close')
    closeSvg.classList.toggle('navbar-midia--close--active')
}

function alignNavbar() {
    const burguerButton = document.getElementById('navbarButton')
    burguerButton.classList.toggle('navbar-button--active')

    const navbarMidia = document.querySelector('div.navbar-midia')
    navbarMidia.classList.toggle('navbar-midia--active')
}

function hideNavbarItem() {
    const navbarItem = document.querySelector('div.navbar-item')
    navbarItem.classList.toggle('navbar-item--active')
}

function changeNavbarFlexDirection() {
    const navbar = document.querySelector('nav.navbar')
    navbar.classList.toggle('navbar--active')
}

function changeMenuUtility() {
    const menuUtility = document.querySelector('div.navbar-menu--utility')
    menuUtility.classList.toggle('navbar-menu--utility--active')

    utilityArr = [...menuUtility.children]
    utilityArr.forEach(item => {
        item.classList.toggle('navbar-menu--utility--span--active')
    })
    menuUtility.children = utilityArr
}

function changeMenuMain() {
    const menuMain = document.querySelector('div.navbar-menu--main')
    menuMain.classList.toggle('navbar-menu--main--active')

    mainArr = [...menuMain.children]
    mainArr.forEach(item => {
        item.classList.toggle('navbar-menu--main--span--active')
    })
    menuMain.children = mainArr 
}

function showMenuUtilityItem() {
    const menuButtons = document.querySelector('div.navbar-menu--buttons')
    menuButtons.classList.toggle('navbar-menu--buttons--active')

    const utilityItem = document.querySelector('div.navbar-menu--utility-item')
    utilityItem.classList.toggle('navbar-menu--utility-item--active')
}

function showNavbarMenu() {
    const navMenu = document.querySelector('div.navbar-menu')
    navMenu.classList.toggle('navbar-menu--active')

    changeNavbarButton()
    hideNavbarItem()
    alignNavbar()
    changeNavbarFlexDirection()    
    changeMenuUtility()    
    changeMenuMain()
    showMenuUtilityItem()
}


function showFooterList(listId, buttonId) {
    const button = document.getElementById(buttonId)
    const straightBar = button.firstElementChild
    straightBar.style.display = straightBar.style.display === 'none' ? 'block' : 'none'

    const list = document.getElementById(listId)
    list.classList.toggle('footer-row--list--active')
    
}


