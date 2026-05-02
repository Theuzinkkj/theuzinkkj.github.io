const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', (e) => {
    const href = card.getAttribute('href');
    if (href === '#portfolio') {
      e.preventDefault();
      console.log('Portfólio ainda não criado');
    }
  });
});