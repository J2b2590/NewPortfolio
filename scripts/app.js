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
  $("html,body").animate(
    {
      scrollTop: $(".projects").offset().top,
    },
    2000
  );
});



$("#aboutButton").click(function () {
  console.log("about CLICKED BUTTON");
  $("html,body").animate(
    {
      scrollTop: $(".aboutMe").offset().top,
    },
    2000
  );
});

$("#miscButton").click(function () {
  console.log("misc CLICKED BUTTON");
  $("html,body").animate(
    {
      scrollTop: $(".countryGent").offset().top,
    },
    2000
  );
});
