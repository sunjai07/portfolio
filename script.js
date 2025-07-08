const gear = document.querySelector('.gear-fixed');
const aboutHeading = document.querySelector('#about h2');
const skillsHeading = document.querySelector('#skills h2');
const projectsHeading = document.querySelector('#projects h2');
const contactHeading = document.querySelector('#contact h2');
gear.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  const enable = document.body.classList.contains('dark-mode');
  projectsHeading.classList.toggle('multicolour-text', enable);
  aboutHeading.classList.toggle('multicolour-text', enable);
  skillsHeading.classList.toggle('multicolour-text', enable);
  contactHeading.classList.toggle('multicolour-text', enable);

});
