
// Menu responsivo
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu-principal');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const aberto = menu.classList.toggle('aberto');
    menuToggle.setAttribute('aria-expanded', String(aberto));
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('aberto');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Atualizar ano automaticamente
const ano = document.querySelector('#ano-atual');
if (ano) {
  ano.textContent = new Date().getFullYear();
}
