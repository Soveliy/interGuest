window.app.Sliders = () => {

   new Swiper('.gallery-main', {
      slidesPerView: 1,
      spaceBetween: 20,
   
      thumbs: {
         swiper: {
            el: '.gallery-preview',
            slidesPerView: 2,
            spaceBetween: 15,
            scrollbar: {
               el: '.gallery-preview__scrollbar',
             },
            breakpoints: {
               576: {
                  direction: 'vertical',
                  spaceBetween: 20,
               },
               992: {
                  direction: 'vertical',
                  spaceBetween: 30,
               }
            }
         }
      }
   });

};

window.app.Sliders();