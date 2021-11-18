$(".hide-button").click(function() {
  $(".ghost-image").hide();
});
$(".show-button").click(function() {
  $(".ghost-image").show();
});
$(".update-img-button").click(function() {
  $(".ghost-image").css("width" ,"50px");
});

$(".message-button").click(function() {
  let userMessage = $(".input").val();
  $(".message").append("Look what you wrote: "+ userMessage);
});
$(".name-button").click(function() {
  $("h1").text("My name is Jeff");
});
