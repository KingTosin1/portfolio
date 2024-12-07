document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuList = document.getElementById('menu-list');

    menuToggle.addEventListener('click', () => {
        menuList.classList.toggle('show'); // Toggles the "show" class
    });
});
