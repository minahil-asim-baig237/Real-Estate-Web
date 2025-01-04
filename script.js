    function toggleMenu() {
      const navLinks = document.querySelector('.nav-links');
      navLinks.classList.toggle('show');
    }
    // Footer
    // Dynamic Year Update
const currentYearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
