/* JavaScript */
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menuContent = document.getElementById('menu-content');

    menuToggle.addEventListener('click', function() {
        if (menuContent.classList.contains('show')) {
            menuContent.style.height = '0';
            setTimeout(() => menuContent.classList.remove('show'), 300);
        } else {
            menuContent.classList.add('show');
            menuContent.style.height = '150px';  // Adjust the height to fit the content
        }
    });
});
