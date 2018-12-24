$(document).ready(function () {
    let widthSlide = 500;
    let slider = $('.slider-wrapper');
    slider.width(slider.children().size() * widthSlide);
    setInterval(nextSlide, 1500);

    function nextSlide() {
        let curentSlide = parseInt(slider.data('current'));
        curentSlide++;
        if (curentSlide >= slider.children().size()) {
            curentSlide = 0;
        }
        slider.animate({left: -curentSlide * widthSlide}, 600).data('current', curentSlide);
    }
});
