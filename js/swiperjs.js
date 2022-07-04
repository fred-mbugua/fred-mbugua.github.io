var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    //when the width is >= 600px
    breakpoints:{
        600: {
            slidesPerView: 2,
        }
    }
});