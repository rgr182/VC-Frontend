document.addEventListener("DOMContentLoaded", function () {
    const listItems = document.querySelectorAll('.list__item--click');

    listItems.forEach(item => {
        item.addEventListener('click', function () {
            const submenu = item.querySelector('.list_show');
            submenu.classList.toggle('active');
        });
    });
});