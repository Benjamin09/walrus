$(document).ready(function() {
  $(".clickable").click(function() {
    $("#initially-hidden").slideToggle();
    $("#initially-showing").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable-tarsier").click(function() {
    $("#initially-hidden-tarsier").slideToggle();
    $("#initially-showing-tarsier").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable-sloth").click(function() {
    $("#initially-hidden-sloth").slideToggle();
    $("#initially-showing-sloth").slideToggle();
  });
});
