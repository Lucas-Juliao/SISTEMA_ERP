document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');

    // Abre a sidebar
    openBtn.addEventListener('click', function(event) {
        event.stopPropagation();
        sidebar.classList.add('open');
    });

    // Fecha a sidebar ao clicar no conteúdo (fora da sidebar)
    content.addEventListener('click', function() {
        if (sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    });

    // Impede que cliques na sidebar a fechem
    sidebar.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});
