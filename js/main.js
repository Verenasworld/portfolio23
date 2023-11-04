window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
}, false);


//typing animation
document.addEventListener('DOMContentLoaded', function (){
  const typed = new Typed('.typing', {

    strings: [ '','Web Designer:in', 'UX/UI Designer:in', 'Web Developer:in', 'LogoDesigner:in', 'Diagital-Artist:in'],
    typeSpeed: 100,
    backSpeed: 60,
    loop:true
  });
})


document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      // Remove the "active" class from all links
      navLinks.forEach(function(navLink) {
        navLink.classList.remove('active');
      });

      // Add the "active" class to the clicked link
      link.classList.add('active');
    });
  });
});



