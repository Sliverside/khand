window.addEventListener('scroll', function() {
  togleh1();
});

function togleh1() {
  sections = document.querySelectorAll("body > section");
  nav = document.getElementById('nav');
  [].forEach.call(sections, function(section) {
    if ((section.offsetTop - window.scrollY) < 300 && (section.offsetTop + section.offsetHeight - window.scrollY) > -300) {
      if (!section.classList.contains("active")) {
        [].forEach.call(sections, function(section) {
          section.classList.remove('active');
        })
        section.classList.add('active');
        nav.classList.remove('color-accueil', 'color-pourquoi', 'color-quoi', 'color-comment', 'color-qui');
        nav.classList.add('color-' + section.id);
      }
    }
  });
}

togleh1();
