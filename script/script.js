$(document).ready(function () {
    $("#lines").click(function () {
        $("#nav-menu").animate().slideToggle();
    });

    $("#features").click(function () {
        $(".drop-content").animate().slideToggle();
    });
});