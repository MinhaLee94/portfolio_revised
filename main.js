window.onload=function(){
  const navbar = document.querySelector("#navbar");
  const navbarMenu = navbar.querySelector(".nav__link");
  navbarMenu.addEventListener('click', (event) => {
    const { target } = event;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
  });
}


var docStyle = document.documentElement.style;

document.addEventListener('mousemove', function(e) {
  docStyle.setProperty('--mouse-x', e.clientX);
  docStyle.setProperty('--mouse-y', e.clientY);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth' });
}