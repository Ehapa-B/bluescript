const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  menu.classList.toggle('active');
});

// Close dropdown menus when clicking outside
window.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !burger.contains(event.target)) {
    menu.classList.remove('active');
    burger.classList.remove('active');
  }
});

// Close dropdown menus on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    menu.classList.remove('active');
    burger.classList.remove('active');
  }
});
