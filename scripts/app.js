console.log("connected");

//Color transistion
$(window).scroll(function () {
  // 100 = The point you would like to fade the nav in.

  if ($(window).scrollTop() > 50) {
    $(".bg").addClass("show");
  } else {
    $(".bg").removeClass("show");
  }
});

$("#projButton").click(function () {
  console.log("CLICKED BUTTON");
  //   $("html,body").animate(
  //     {
  //       scrollTop: $(".projSummary").offset().top,
  //     },
  //     "slow"
  //   );
});
