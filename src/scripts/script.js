document.addEventListener("DOMContentLoaded", () => {

   window.app = {};

   // Plugins
   @@include('./plugins/jquery.min.js');
   @@include('./plugins/jquery-ui.min.js');
   @@include('./plugins/swiper.js');
   @@include('./plugins/imask.js');
   @@include('./plugins/glightbox.min.js');
   @@include('./plugins/MorphSVGPlugin.min.js');
   @@include('./plugins/TweenMax.js');

   //Blocks

   @@include('./blocks/burger.js');
   @@include('./blocks/sliders.js');
   @@include('./blocks/map.js');
   @@include('./blocks/init.js');
   @@include('./blocks/datepicker-init.js');
}); 