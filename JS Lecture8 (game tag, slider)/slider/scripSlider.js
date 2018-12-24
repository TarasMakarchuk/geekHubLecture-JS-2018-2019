$(document).ready(function () {
    let widthSlide = 500;
    $('.slider-wrapper').width($('.slider-wrapper').children().size() * widthSlide);
    sliderTimer = setInterval(nextSlide, 1500);

    function nextSlide() {
        let curentSlide = parseInt($('.slider-wrapper').data('current'));
        curentSlide++;
        if (curentSlide >= $('.slider-wrapper').children().size()) {
            curentSlide = 0;
        }
        $('.slider-wrapper').animate({left: -curentSlide * widthSlide}, 600).data('current', curentSlide);
    }
});
