document.addEventListener('DOMContentLoaded', function() {
    const swiperContainers = document.querySelectorAll('.preview');

    swiperContainers.forEach(function(container) {
        new Swiper(container, {
            loop: true, 
            autoplay: false,
            navigation: {
                nextEl: container.querySelector('.swiper-preview-button-next'),
                prevEl: container.querySelector('.swiper-preview-button-prev')
            },
            pagination: {
                el: container.querySelector('.swiper-preview-pagination'),
                type: 'bullets',
                clickable: true
            },
            slidesPerView: 1,
            spaceBetween: 10 
        });
    });
});