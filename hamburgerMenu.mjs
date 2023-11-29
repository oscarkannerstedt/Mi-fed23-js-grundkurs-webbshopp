export function hamburgerMenu() {
  const menuBtn = document.querySelector('#menu-button');
  const menu = document.querySelector('#menu');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('menu-open');
  });

  const menuItems = document.querySelectorAll('.menu span');

  menuItems.forEach((item) => {
    item.addEventListener('click', () => {
      menuBtn.classList.remove('menu-open');

      let targetId;
      switch (item.textContent.toLowerCase()) {
        case 'produkter':
          targetId = 'donutsWrapper';
          break;
        case 'varukorg':
          targetId = 'shoppingCart';
          break;
        case 'kontakt':
          targetId = 'footer';
          break;
        default:
          break;
      }
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}
