new Swiper(".slideshow", {
    loop: true,
    // parallax: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

new Swiper(".slideshow-instagram", {
    loop: true,
    slidesPerView: 2,
    spaceBetween: 5,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 768 (tablets)
        768: {
            slidesPerView: 3,
        },
        // when window width is >= 992 (desktop)
        992: {
            slidesPerView: 5,
        },
    },
});
