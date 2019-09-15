$(document).ready(function () {
   // Data Picker Initialization
   // $('.datepicker').pickadate();
   var title;
   var link;
   var linkLabel;
   var fromDate;
   var atFromTime;
   var atDate;
   var atToTime;
   var description;
   var address;

   $(".Submit").click(function () {
      title = $('.eventTitle').val();
      link = $('.eventLink').val();
      linkLabel = $('.linkLabel').val();
      fromDate = $('.fromDate').val();
      atFromTime = $('.atFromTime').val();
      atDate = $('.toDate').val();
      atToTime = $('atToTime').val();
      description = $('.description').val();
      address = $('.address').val();
      console.log(title, link, linkLabel);
   });

});