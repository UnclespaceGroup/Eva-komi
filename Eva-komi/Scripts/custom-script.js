$(document).ready(function () {
    var now = new Date();
    var hour = now.getHours();
    if ((hour % 3) == 0) {
        $(".landing-main--active-car > div , .landing-main--active-car-m > div").text("Свободна 1 машина");
    }
    else if ((hour % 2) == 0) {
        $(".landing-main--active-car > div , .landing-main--active-car-m > div").text("Свободны 2 машины");
    }
    else {
        $(".landing-main--active-car > div , .landing-main--active-car-m > div").text("Свободны 3 машины");
    }
})
$(".btn-toPrice").click(function () {
    var top = $(".price-list").offset().top ;
    $(" html, body ").animate({ scrollTop: top }, 1500);
});
$(".call").click(function () {
    location.href = "tel:340-111";
})
$(document).scroll(function () {
    var scroll = $(document).scrollTop();
    var scrolBody = $(".body").scrollTop() + $(window).height();
    if (scroll > scrolBody) {
        $(".top-menu").css("background-color", "rgba(0,0,0,0.85)");
    }
    else {
        $(".top-menu").css("background-color", "rgba(0,0,0,0)");
    }
});

