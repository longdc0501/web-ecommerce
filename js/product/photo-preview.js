var swiperPhotoPreviewProduct;

var openSwiper = (initialSlide) => {
    swiperPhotoPreviewProduct = new Swiper('.swiper-photo-preview', {
        // Optional parameters
        direction: 'horizontal',
        initialSlide: initialSlide
        // loop: true
    });

    swiperPhotoPreviewProduct.on('slideChange', function () {
        // $('.count').text(this.activeIndex + 1);
        // console.log(this.activeIndex)
    });
}