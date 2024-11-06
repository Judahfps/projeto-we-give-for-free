
  const dropdownButton = document.getElementById('menu');
  const dropdownMenu = document.getElementById('drop-menu');

  //dropdown mobile
  const dropdownButton1 = document.getElementById('mobile-button');
  const dropdownMenu1 = document.getElementById('mobile-drop');

  //menu mobile
  const menuMobile= document.getElementById('container-close')
  const menuAbrir = document.getElementById('btn-open');
  const menuFechar = document.getElementById('btn-close')
  // const closeMenu = document.getElementById('close-menu')
  // const closeNav = document.getElementById('close-nav')
  // const containerClose = document.getElementById('container-close')

  dropdownButton.addEventListener('click', () => {
    // Toggle a classe 'hidden' para mostrar ou esconder o menu
    dropdownMenu.classList.toggle('hidden');
  });

  // Clique fora do dropdown para fechá-lo
  window.addEventListener('click', (event) => {
    if (!dropdownButton.contains(event.target)) {
      dropdownMenu.classList.add('hidden');
    }
  });

  dropdownButton1.addEventListener('click', () => {
    dropdownMenu1.classList.toggle('hidden');
});

// Fechar o dropdown quando clicar fora dele
window.addEventListener('click', (e) => {
    if (!dropdownButton1.contains(e.target)) {
        dropdownMenu1.classList.add('hidden');
    }
});

function openMnu(){
  menuMobile.classList.remove('hidden')
  menuMobile.classList.add('flex')


}


function closeMenu(){

}

// closeMenu.addEventListener('click', () => {
//     containerClose.classList.toggle('hidden')
// })





