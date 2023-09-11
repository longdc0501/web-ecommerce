var swiperPhotoPreviewProduct;

var openSwiper = (initialSlide) => {
    swiperPhotoPreviewProduct = new Swiper('.swiper-photo-preview', {
        // Optional parameters
        direction: 'horizontal',
        initialSlide: initialSlide
        // loop: true
    });

    swiperPhotoPreviewProduct.on('slideChange', function () {
        var domImg = this.el.querySelectorAll('img')[this.activeIndex]
        if (domImg){
            document.getElementById("rate-preview").textContent = domImg.getAttribute("data-rate-num")
            document.getElementById("time-preview").textContent = domImg.getAttribute("data-time-left")
            document.getElementById("comment-preview").textContent = domImg.getAttribute("data-text-content")
            document.getElementById("cust-name-preview").textContent = domImg.getAttribute("data-cust-name")
            document.getElementById("number-reply-cmt").textContent = domImg.getAttribute("data-reply")
        }
    });
}