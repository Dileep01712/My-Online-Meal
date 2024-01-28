document.addEventListener('DOMContentLoaded', function () {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const menuItems = document.querySelectorAll('nav .mainMenu li a');

    close();

    openMenu.addEventListener('click', show);

    if (closeMenu) {
        closeMenu.addEventListener('click', close);
    }

    menuItems.forEach(item => {
        item.addEventListener('click', close);
    });

    function show() {
        mainMenu.style.display = 'flex';
        mainMenu.style.top = '0';
    }

    function close() {
        if (mainMenu) {
            mainMenu.style.top = '-100%';
        }
    }
});

var userIcon = document.getElementById('userIcon');
var userBtnContainer = document.querySelector('.userbtn');

userIcon.addEventListener('click', function (event) {
    event.stopPropagation();
    userBtnContainer.classList.toggle('active');
});

document.addEventListener('click', function () {
    userBtnContainer.classList.remove('active');
});

