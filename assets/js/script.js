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

  $(".has-children").hover(function(){
    $("#women-pane").css("display","none");
    $("#men-pane").css("display","none")
    $("#accessories-pane").css("display","none")
    $("#world-pane").css("display","none")
  })

  // women sub-menu
  $("#sub-menu-women").hover(function(){
    $("#women-pane").css("display","block");
    $("#men-pane").css("display","none")
    $("#accessories-pane").css("display","none")
    $("#world-pane").css("display","none")
  }
  
  );
  $("#women-pane").hover(function(){},
  function(){
    $(this).css("display","none")
  });



  //  Men Sub-menu
  $("#sub-menu-men").hover(function(){
    $("#men-pane").css("display","block");
    $("#women-pane").css("display","none")
    $("#accessories-pane").css("display","none")
    $("#world-pane").css("display","none")
    
  }
 
  
  );
  $("#men-pane").hover(function(){},
  function(){
    $(this).css("display","none")
  });



  // Accesssories Sub-menu
  $("#sub-menu-accessories").hover(function(){
    $("#accessories-pane").css("display","block");
    
    $("#men-pane").css("display","none");
    $("#women-pane").css("display","none");
   
    $("#world-pane").css("display","none");
  }
  
  );
  $("#accessories-pane").hover(function(){},
  function(){
    $(this).css("display","none");
  });
  // 


  

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
