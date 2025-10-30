document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const sidebar = document.getElementById('sidebar');

    // Abre/fecha o menu ao clicar no botão
    openBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique se propague para o document
        sidebar.classList.toggle('open');
    });

    // Fecha o menu se clicar fora dele
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnOpenBtn = openBtn.contains(event.target);

        if (sidebar.classList.contains('open') && !isClickInsideSidebar && !isClickOnOpenBtn) {
            sidebar.classList.remove('open');
        }
    });
});
