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

//nav section
//
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


document.addEventListener("scroll", function() {
  const pageTop = window.scrollY;
  const pageBottom = pageTop + window.innerHeight;
  const tags = document.querySelectorAll(".education");

  tags.forEach(tag => {
    if (tag.getBoundingClientRect().top < pageBottom) {
      tag.classList.add("visible");
    } else {
      tag.classList.remove("visible");
    }
  });
});





//aside


const navToggler = document.querySelector('.nav-toggler');
const nav = document.querySelector('.aside');

let isNavOpen = false;

// Funktion zum Öffnen der Navigation
function openNav() {

  nav.style.transition = '0.5s'; // Füge eine Übergangsanimation hinzu
  nav.style.transform = 'translateX(0)';
  nav.style.display = 'block';
  isNavOpen = true;
}

// Funktion zum Schließen der Navigation
function closeNav() {

  nav.style.transition = '0.5s'; // Füge eine Übergangsanimation hinzu
  nav.style.transform = 'translateX(-100%)';
  nav.style.display = 'none';
  isNavOpen = false;
}

// Event-Handler für den Klick auf den Toggler
navToggler.addEventListener('click', () => {
  if (isNavOpen) {
    closeNav(); // Navigation ist geöffnet, schließen
  } else {
    openNav(); // Navigation ist geschlossen, öffnen
  }
});



// const nav = document.querySelector('.nav');
// const navList = nav.querySelectorAll('li');
// allSection = document.querySelectorAll('.section')
// const totalNavList = navList.length;
// totalSection = allSection.length
//
// for (let i = 0; i < totalNavList; i++)
// {
//   const a = navList[i].querySelector('a');
//   a.addEventListener('click', function ()
//   {
//
//     for (let j = 0; j < totalNavList; j++) {
//    if(navList[j].querySelector('a').classList.contains('active'))
//     {
//
//      allSection[j].classList.add('back-section');
//     }
//     navList[j].querySelector('a').classList.remove('active');
//     }
//     this.classList.add('active');
//     showSection(this);
//   });
// }
//
// function showSection(element) {
//
//   for(let i=0; i<totalNavList; i++){
//     allSection[i].classList.remove()
//   }
//
//   const target = element.getAttribute('href').split('#')[1];
//   document.querySelector('#' + target).classList.add('active');
// }

