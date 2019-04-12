$(document).ready(function () {
    var wow = new WOW({
        offset: 60
    })
    wow.init();
    var element = $.makeArray($(".burger"));
    $(element).each(function(){
        width= ~~$(this).width();
        height= ~~$(this).height();
        $(this).css("min-width", width).css("min-height", height);
    });
    $(".burger").click(function() {
        $(".burger").toggleClass("open");
        $("header").slideToggle();
    });
    $("input[type=\"number\"]").focus(function () {
        $(this).val("");
    });
    $(".form-trigger").click(function () {
        $(".form-modal").slideToggle("fast");
        $("body").toggleClass("off");
    })
    $(".close").click(function () {
        $(".form-modal").slideToggle("fast");
        $("body").toggleClass("off");
    })
})