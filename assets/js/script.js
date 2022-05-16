(function ($) {
  // Navbar fixed top
  var yourNavigation = $(".navbar_top");
  stickyDiv = "sticky";
  yourHeader = $(".navbar_top").height();

  $(window).scroll(function () {
    if ($(this).scrollTop() > yourHeader) {
      yourNavigation.addClass(stickyDiv);
    } else {
      yourNavigation.removeClass(stickyDiv);
    }
  });
  //Search Switch
  $(".search-switch").on("click", function () {
    $(".search-model").css("display", "block");
  });

  $(".search-close-switch").on("click", function () {
    $(".search-model").css("display", "none");
  });

  // offcanvas search switch
  
  $(".offcanvas-search").on("click", function () {
    $(".search-model").css("display", "block");
  });

  $(".offcanvas-search-close-switch").on("click", function () {
    $(".search-model").css("display", "none");
  });

  /*------------------
          Background Set
      --------------------*/
  $(".set-bg").each(function () {
    var bg = $(this).data("setbg");
    $(this).css("background-image", "url(" + bg + ")");
  });

  //Canvas Menu
  $(".canvas__open").on("click", function () {
    $(".offcanvas-menu-wrapper").addClass("active");
    $(".offcanvas-menu-overlay").addClass("active");
  });

  $(".offcanvas-menu-overlay").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });
  $(".offcanvas-close-switch").on("click", function () {
    $(".offcanvas-menu-wrapper").removeClass("active");
    $(".offcanvas-menu-overlay").removeClass("active");
  });
})(jQuery);
