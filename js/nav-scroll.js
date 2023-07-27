$(document).ready(function () {
  $(window).on("scroll", function () {
    var scrollPos = $(document).scrollTop();

    $(".nav-link").each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      var sectionPos = refElement[0].getBoundingClientRect();

      if (sectionPos.top <= 50 && sectionPos.bottom >= 50) {
        $(".nav-link").removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    });
  });
});
