// script.js
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const filterType = document.getElementById('filterType');
    const filterLocation = document.getElementById('filterLocation');
    const filterButton = document.getElementById('filterButton');
    const petCatalog = document.getElementById('petCatalog');

    filterButton.addEventListener('click', applyFilters);

    function applyFilters() {
        const searchQuery = searchInput.value.toLowerCase();
        const typeFilter = filterType.value;
        const locationFilter = filterLocation.value;

        const petItems = petCatalog.getElementsByClassName('pet-item');
        
        for (let i = 0; i < petItems.length; i++) {
            const petItem = petItems[i];
            const name = petItem.querySelector('.card-title').textContent.toLowerCase();
            const description = petItem.querySelector('.card-text:nth-child(3)').textContent.toLowerCase();
            const type = petItem.querySelector('.card-text:nth-child(2)').textContent.split(': ')[1];
            const location = petItem.querySelector('.card-text:nth-child(4)').textContent.split(': ')[1];

            if (
                (name.includes(searchQuery) || description.includes(searchQuery)) &&
                (typeFilter === '' || type === typeFilter) &&
                (locationFilter === '' || location === locationFilter)
            ) {
                petItem.style.display = 'block';
            } else {
                petItem.style.display = 'none';
            }
        }
    }
});
