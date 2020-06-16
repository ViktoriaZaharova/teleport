$('ul.tabs__caption').on('click', 'li:not(.active)', function () {
    $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
});

$( ".select-currency" )
    .selectmenu()
    .selectmenu( "menuWidget" )
    .addClass( "overflow" );

$('.ticker').simplemarquee({
    speed: 100,
    cycles: Infinity,
    space: 0,
    delayBetweenCycles: 0,
    handleHover: false,
    handleResize: false
});

$('.btn-open').click(function () {
   $('.mobile-menu').fadeIn();
});

$('.btn-close').click(function () {
    $('.mobile-menu').fadeOut();
});