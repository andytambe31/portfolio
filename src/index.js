const toggleMenu = () => {
    const offcanvasContainer = document.getElementsByClassName("offcanvas")[0];
    if (offcanvasContainer) {
        offcanvasContainer.classList.toggle('show');
    }
 }
 
 document.addEventListener('DOMContentLoaded', () => {
     const hamburgerBtn = document.getElementById('hamburger-btn');
     const offcanvasContainer = document.getElementsByClassName("offcanvas")[0];
 
     hamburgerBtn.addEventListener('click', (e) => {
         e.stopPropagation(); // Prevent click from propagating to document
         toggleMenu();
     });
 
     document.addEventListener('click', (e) => {
         if ((offcanvasContainer.classList.contains('show') && !offcanvasContainer.contains(e.target)) || e.target.classList.contains('nav-link')) {
             toggleMenu();
         }
     });
     
 });
 