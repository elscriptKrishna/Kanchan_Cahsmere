(function ($) {
    
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
  
    
    
    
  })(jQuery);
  