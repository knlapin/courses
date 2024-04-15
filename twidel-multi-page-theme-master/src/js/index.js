//Лайтбокс
$(document).on('click', '[data-toggle="lightbox"]', function (event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Ползунок
$('.slider').slick({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
});