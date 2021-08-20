window.onload=function(){
  const navbar = document.querySelector("#navbar");
  const navbarMenu = navbar.querySelector(".nav__link");
  const arrowBtn = document.querySelector('.arrow-up');
  const home = document.querySelector('.first__page');
  const homeHeight = home.getBoundingClientRect().height;
  navbarMenu.addEventListener('click', (event) => {
    const { target } = event;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
    navbarMenu.classList.toggle('menu-on');
    if (toggleIcon.classList.contains('fa-bars')){
      toggleIcon.classList.remove("fa-bars")
      toggleIcon.classList.add("fa-times")
    } else {
      toggleIcon.classList.add("fa-bars")
      toggleIcon.classList.remove("fa-times")
    }
  });

  document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2){
        arrowBtn.classList.add('visible');
    } else {
        arrowBtn.classList.remove('visible');
    }
  });

  arrowBtn.addEventListener('click', () => {
      scrollIntoView('.first__page');
  });

  var docStyle = document.documentElement.style;

  document.addEventListener('mousemove', function(e) {
    docStyle.setProperty('--mouse-x', e.clientX);
    docStyle.setProperty('--mouse-y', e.clientY);
  });

  function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({ behavior: 'smooth' });
  }

  const toggleBtn = document.querySelector('.navbar__toggle-btn');
  const toggleIcon = toggleBtn.querySelector('i');
  toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('menu-on');
    if (toggleIcon.classList.contains('fa-bars')){
      toggleIcon.classList.remove("fa-bars")
      toggleIcon.classList.add("fa-times")
    } else {
      toggleIcon.classList.add("fa-bars")
      toggleIcon.classList.remove("fa-times")
    }
  });
}





