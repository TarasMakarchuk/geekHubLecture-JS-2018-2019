$(document).ready(function () {
    let widthSlide = 500;
    let slider = $('.slider-wrapper');
    slider.width(slider.children().size() * widthSlide);
    setInterval(nextSlide, 1500);

    function nextSlide() {
        let currentSlide = parseInt(slider.data('current'));
        currentSlide++;
        if (currentSlide >= slider.children().size()) {
            currentSlide = 0;
        }
        slider.animate({left: -currentSlide * widthSlide}, 600).data('current', currentSlide);
    }
});
