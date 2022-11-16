window.app.Scroll = () => {
   //scroll------------------------------>
   const anchors = document.querySelectorAll('.js-anchor');
   if (anchors) {
      for (let anchor of anchors) {
         anchor.addEventListener('click', function (e) {
               e.preventDefault()
               const headerHeight = document.documentElement.clientWidth <= 1360 ? document.querySelector('.header').offsetHeight :  0;
               const top = document.querySelector(anchor.getAttribute('href')).offsetTop - headerHeight + 10;
               window.scrollTo({
                  top: top,
                  behavior: "smooth"
               });
         })
      }
   }
};

window.app.Scroll();