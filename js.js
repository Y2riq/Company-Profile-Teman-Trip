//menu
var tombolMenu = $(".tombol-menu");
var menu = $("nav .menu ul");

function klikMenu() {
    tombolMenu.click(function() {
        menu.toggle();
    });
    menu.click(function() {
        menu.toggle();
    });
}

$(document).ready(function () {
    var width = $(window).width();
    if (width < 990) {
        klikMenu();
    }
})

//check lebar
$(window).resize(function () {
    var width = $(window).width();
    if (width > 989) {
        menu.css("display", "block");
    }else{
        menu.css("display", "none");
    }
    klikMenu();
});

//efek scroll
$(document).ready(function () {
    var scroll_pos = 0;
    $(document).scroll(function() {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos > 0){
            $("nav").addClass("putih");
            $("nav img.hitam").show();
            $("nav img.putih").hide();
        }else{
            $("nav").removeClass("putih");
            $("nav img.hitam").hide();
            $("nav img.putih").show();
        }
    })
});

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    const target = $(this.getAttribute('href'));
    if (target.length) {
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 70 // offset untuk navbar height
      }, 800); // 800ms animasi scroll
    }
  });
});