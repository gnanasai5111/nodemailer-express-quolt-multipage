

$(".entire-section").hide();
setTimeout(function() {
  $("body").css("position","inherit");
  $(".loading").fadeOut();
}, 3000);

setTimeout(function() {
    $("body").css("position","relative");
  $(".entire-section").show();
  $(".loading").remove();


}, 4000);




// $(".entire-section").hide();
//
//
//   $(window).on('load', function () {
//
//
//       $(".loading").fadeOut("slow");
//       $(".entire-section").show();
//  });
