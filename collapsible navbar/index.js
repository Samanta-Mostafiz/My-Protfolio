const toggleButton = document.getElementById('toggleButton');
const navbarLinks = document.getElementById('navbarLinks');

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});
