$('.sliderr').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});
$(function(){

    $('.none').click(function(){
        $(".tpggle").slideToggle('300')
    })
    $('.menu-item').click(function(){
        $(".drop-menu").slideToggle('300')
    })
    $('.menu-item1').click(function(){
        $(".drop-menu1").slideToggle('300')
    })

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
           $('header').addClass('newClass');
        } else {
           $('header').removeClass('newClass');
        }
    });
})