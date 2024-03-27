console.log("main.js loaded");

$(document).ready(function() {
    var carousel = $('.carousel');
    var carouselItems = $('.carousel-item');
    var currentIndex = 0;
    var totalItems = carouselItems.length;
    var itemWidth = carouselItems.width();

    function slideCarousel() {
        var newPosition = -(currentIndex * itemWidth);
        carousel.css('transform', 'translateX(' + newPosition + 'px)');
    }

    $('.next').click(function() {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            slideCarousel();
        }
    });

    $('.prev').click(function() {
        if (currentIndex > 0) {
            currentIndex--;
            slideCarousel();
        }
    });
});