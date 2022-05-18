(function ($) {
  // Navbar fixed top
  var yourNavigation = $(".navbar_bottom");
  stickyDiv = "sticky";
  yourHeader = $(".navbar_bottom").height();

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
  // Submenu on Hover

  $(".has-children").hover(function () {
    $("#women-pane").css("display", "none");
    $("#men-pane").css("display", "none");
    $("#accessories-pane").css("display", "none");
    $("#world-pane").css("display", "none");
  });

  // women sub-menu
  $("#sub-menu-women").hover(function () {
    $("#women-pane").css("display", "block");
    $("#men-pane").css("display", "none");
    $("#accessories-pane").css("display", "none");
    $("#world-pane").css("display", "none");
  });
  $("#women-pane").hover(
    function () {},
    function () {
      $(this).css("display", "none");
    }
  );

  //  Men Sub-menu
  $("#sub-menu-men").hover(function () {
    $("#men-pane").css("display", "block");
    $("#women-pane").css("display", "none");
    $("#accessories-pane").css("display", "none");
    $("#world-pane").css("display", "none");
  });
  $("#men-pane").hover(
    function () {},
    function () {
      $(this).css("display", "none");
    }
  );

  // Accesssories Sub-menu
  $("#sub-menu-accessories").hover(function () {
    $("#accessories-pane").css("display", "block");

    $("#men-pane").css("display", "none");
    $("#women-pane").css("display", "none");

    $("#world-pane").css("display", "none");
  });
  $("#accessories-pane").hover(
    function () {},
    function () {
      $(this).css("display", "none");
    }
  );
  // Our World Sub menu

  $("#sub-menu-world").hover(function () {
    $("#world-pane").css("display", "block");

    $("#men-pane").css("display", "none");
    $("#women-pane").css("display", "none");

    $("#accessories-pane").css("display", "none");
  });
  $("#world-pane").hover(
    function () {},
    function () {
      $(this).css("display", "none");
    }
  );

  // offcanvas search switch

  $(".offcanvas-search").on("click", function () {
    $(".search-model").css("display", "block");
  });

  $(".offcanvas-search-close-switch").on("click", function () {
    $(".search-model").css("display", "none");
  });
  // offcanvas Sub menu
  $("#offcanvas-women-li").on("click", function () {
    $("#women-submenu").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
  });
  $("#offcanvas-men-li").on("click", function () {
    $("#men-submenu").toggleClass("active");
    $("#rotate-icon6").toggleClass("arrow-rotate");
  });
  // women submenu ready to wear Section
  $("#submenu-menu").on("click", function () {
    $("#women-clothes").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
    $("#women-submenu").toggleClass("active");

    $("#rotate-icon1").toggleClass("arrow-rotate");
  });
  // Women Submenu Accessories Section
  
  $("#submenu-menu1").on("click", function () {
    $("#women-accessories").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
    $("#women-submenu").toggleClass("active");

    $("#rotate-icon2").toggleClass("arrow-rotate");
  });
  // women submenu Shoe Section
  $("#submenu-menu2").on("click", function () {
    $("#women-shoes").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
    $("#women-submenu").toggleClass("active");

    $("#rotate-icon3").toggleClass("arrow-rotate");
  });
  // women submenu Bags Section
  $("#submenu-menu3").on("click", function () {
    $("#women-bags").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
    $("#women-submenu").toggleClass("active");

    $("#rotate-icon4").toggleClass("arrow-rotate");
  });
  // women submenu Home Section
  $("#submenu-menu4").on("click", function () {
    $("#women-home").toggleClass("active");
    $("#rotate-icon").toggleClass("arrow-rotate");
    $("#women-submenu").toggleClass("active");

    $("#rotate-icon5").toggleClass("arrow-rotate");
  });
  // men submenu Ready to wear section
  $("#submenu-menu5").on("click", function () {
    $("#men-clothes").toggleClass("active");
    $("#men-submenu").toggleClass("active");
    $("#rotate-icon7").toggleClass("arrow-rotate");
    $("#rotate-icon6").toggleClass("arrow-rotate");
  });
  // Men submenu Accessories Section
  $("#submenu-menu6").on("click", function () {
    $("#men-accessories").toggleClass("active");
    $("#men-submenu").toggleClass("active");
    $("#rotate-icon8").toggleClass("arrow-rotate");
    $("#rotate-icon6").toggleClass("arrow-rotate");
  });
  // Men submenu Shoe Section
  $("#submenu-menu7").on("click", function () {
    $("#men-shoes").toggleClass("active");
    $("#men-submenu").toggleClass("active");
    $("#rotate-icon9").toggleClass("arrow-rotate");
    $("#rotate-icon6").toggleClass("arrow-rotate");
  });
   // Accessories submenu  Section
   $("#submenu-menu8").on("click", function () {
    $("#men-shoes").toggleClass("active");
    $("#men-submenu").toggleClass("active");
    $("#rotate-icon9").toggleClass("arrow-rotate");
    $("#rotate-icon6").toggleClass("arrow-rotate");
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
