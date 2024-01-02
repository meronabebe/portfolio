// Smooth scrolling animation forscrolling navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Animation on scroll
  window.addEventListener('scroll', reveal);
  
  function reveal() {
    const reveals = document.querySelectorAll('.reveal');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const revealTop = reveals[i].getBoundingClientRect().top;
      const revealPoint = 50;
  
      if (revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active');
      }
    }
  }