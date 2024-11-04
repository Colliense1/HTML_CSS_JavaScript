const sidebar = document.getElementById('sidebar');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleSidebar() {
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        menuIcon.style.display = 'none'; // Hide menu icon
        closeIcon.style.display = 'block'; // Show close icon
    } else {
        menuIcon.style.display = 'block'; // Show menu icon
        closeIcon.style.display = 'none'; // Hide close icon
    }
}

document.querySelectorAll('.sidebar-links a').forEach(item => {
    item.addEventListener('click', () => {
        sidebar.classList.remove('active');
        menuIcon.style.display = 'block'; // Show menu icon
        closeIcon.style.display = 'none'; // Hide close icon
    });
});