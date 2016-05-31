$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
});
