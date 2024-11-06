

const dropdownButton1 = document.getElementById('mobile-button');
const dropdownMenu1 = document.getElementById('mobile-drop');
const closeMenu = document.getElementById('close-menu')
const closeNav = document.getElementById('close-nav')
const containerClose = document.getElementById('container-close')

dropdownButton1.addEventListener('click', () => {
    dropdownMenu1.classList.toggle('hidden');
});

// Fechar o dropdown quando clicar fora dele
window.addEventListener('click', (e) => {
    if (!dropdownButton1.contains(e.target)) {
        dropdownMenu1.classList.add('hidden');
    }
});

closeMenu.addEventListener('click', () => {
    closeNav.classList.toggle('hidden');
    containerClose.classList.toggle('hidden');

});

// closeMenu.addEventListener('click', () => {
//     containerClose.classList.toggle('hidden')
// })


