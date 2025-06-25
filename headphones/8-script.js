document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('.hamburger');
  const navList = document.getElementById('.nav-list');

  hamburger.addEventListener('click', () => {
    navList.classList.toggle('show');
    hamburger.classList.toggle('active')
  });
});