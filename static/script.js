document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('open-btn');
    const closeBtn = document.getElementById('close-btn');
    const overlayMenu = document.getElementById('overlay-menu');
    const overlayContent = document.querySelector('.overlay-content');

    // Abre o menu overlay
    openBtn.addEventListener('click', function() {
        overlayMenu.classList.add('open');
    });

    // Função para fechar o menu
    function closeMenu() {
        overlayMenu.classList.remove('open');
    }

    // Fecha o menu ao clicar no botão de fechar
    closeBtn.addEventListener('click', closeMenu);

    // Fecha o menu se clicar no "fundo" do overlay (fora do conteúdo do menu)
    overlayMenu.addEventListener('click', function(event) {
        // Se o clique foi no próprio overlay e não nos seus filhos (o conteúdo)
        if (event.target === overlayMenu) {
            closeMenu();
        }
    });
});
