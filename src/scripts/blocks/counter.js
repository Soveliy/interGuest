window.app.Counter = () => {

   const boxQuantitys = document.querySelectorAll('.js-quantity');
   if (!boxQuantitys) return;

   boxQuantitys.forEach((boxQuantity) => {
      let dropBtn       = boxQuantity.querySelector('.field__btn');
      let choiceList    = boxQuantity.querySelector('.quantity__list');
      let choiceHeader  = boxQuantity.querySelector('.quantity__header');

      choiceHeader.addEventListener('click', choiceOpen);

      function choiceOpen() {

         boxQuantity.classList.toggle('quantity--active');

         if (boxQuantity.classList.contains('quantity--active')) {
            choiceList.style.maxHeight = choiceList.scrollHeight + "px";

            const elementAnchors = document.querySelectorAll('.go-js-choice-item');
            dropBtn.classList.add('field__btn--active');

            elementAnchors.forEach((elementAnchor) => {
               const choiceName = document.querySelector('.input-title').textContent;
               const thisAnchor = elementAnchor.querySelector('.quantity__input');
               elementAnchor.onclick = newTitle;

               function newTitle() {
                  if (thisAnchor.checked) {
                     let activeAnchor    = this.querySelector('.quantity__name').textContent;
                     let choiceTitleName = this.closest('.quantity').querySelector('.input-title');
                     choiceTitleName.value = activeAnchor;
                     boxQuantity.classList.remove('quantity--active');
                     dropBtn.classList.remove('field__btn--active');
                     choiceList.style.maxHeight = 0;
                  } else {
                     let choiceTitleName = this.closest('.quantity').querySelector('.input-title');
                     choiceTitleName.value = choiceName;
                  }
               }
            })
         } else {
            choiceList.style.maxHeight = 0;
            dropBtn.classList.remove('field__btn--active');
         }
      }
   });

   console.log('');

};

window.app.Counter();