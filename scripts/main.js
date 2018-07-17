window.addEventListener('scroll', function() {
  togleh1();
});

function togleh1() {
  sections = document.querySelectorAll("body > section");
  [].forEach.call(sections, function(section) {
    if ((section.offsetTop - window.scrollY) < 300 && (section.offsetTop + section.offsetHeight - window.scrollY) > -300) {
      if (!section.classList.contains("active")) {
        [].forEach.call(sections, function(section) {
          section.classList.remove('active');
        })
        section.classList.add('active');
      }
    }
  });
}

togleh1();
