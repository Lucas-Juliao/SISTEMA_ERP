document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const sidebar = document.getElementById('sidebar');

    openBtn.addEventListener('click', function() {
        sidebar.classList.toggle('open');
    });
});
