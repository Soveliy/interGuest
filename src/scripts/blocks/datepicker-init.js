window.app.Datepicker = () => {
   //datepicker plugin

   $( function() {
      var dateFormat = "yy-mm-dd",
         
         from = $( "#from" ).datepicker({
            defaultDate: "+1w",
            numberOfMonths: 2,
            altField: "#actualDate",
            dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"],
            dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
            monthNames: ["Январь", "Феврфль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
         })
         .on( "change", function() {
            to.datepicker( "option", "minDate", getDate( this ) );
         }),
        
         to = $( "#to" ).datepicker({
            defaultDate: "+1w",
            numberOfMonths: 2,
            dayNames: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресение"],
            dayNamesMin: [ "Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс" ],
            monthNames: ["Январь", "Феврфль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]
         })
         .on( "change", function() {
            from.datepicker( "option", "maxDate", getDate( this ) );
         });
   
      function getDate( element ) {
        var date;
        try {
          date = $.datepicker.parseDate( dateFormat, element.value );
        } catch( error ) {
          date = null;
        }
   
        return date;
      }
   });
};

window.app.Datepicker();