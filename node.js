// Obtendo os elementos necessários
const btnMenu = document.getElementById('btn-menu');
const menuMobile = document.getElementById('menu-mobile');
const overlayMenu = document.getElementById('overlay-menu');
const btnFechar = document.querySelector('.btn-fechar-menu');

// Função para abrir o menu
btnMenu.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
    overlayMenu.style.display = 'block'; // Exibe o overlay de fundo
});

// Função para fechar o menu
btnFechar.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlayMenu.style.display = 'none'; // Esconde o overlay de fundo
});

// Função para fechar o menu ao clicar no overlay (fundo escurecido)
overlayMenu.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
    overlayMenu.style.display = 'none'; // Esconde o overlay de fundo
});
