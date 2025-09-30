// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const container = event.target.closest('.portals-dropdown-container');
    const dropdown = document.getElementById('portalsDropdownMenu');
    const button = document.getElementById('portalsButton');
    
    if (!container) {
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});

// Close dropdown on escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const dropdown = document.getElementById('portalsDropdownMenu');
        const button = document.getElementById('portalsButton');
        dropdown.classList.remove('show');
        button.classList.remove('active');
    }
});
