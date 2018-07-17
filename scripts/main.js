window.addEventListener('scroll', function() {
  console.log('scroll');
  togleh1();
});

function togleh1() {
  sections = document.querySelectorAll("body > section");
  [].forEach.call(sections, function(section) {
    console.log(section.offsetTop - window.scrollY);
    if
  });
}
