var showSubComment = (index) => {
    var displayCountdown = document.querySelector(`#sub-comment-${index}`);

    if (displayCountdown) {
        if (displayCountdown.style.display === '') {
            displayCountdown.style.display = 'none'
        } else {
            displayCountdown.style.display = ''
        }
    }
}

// var reviewSwiperPhoto = new Swiper('.review-swiper-photo', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true
// });

var reviewSwiperPhoto;

var openSwiper = (initialSlide) => {
    reviewSwiperPhoto = new Swiper('.review-swiper-photo', {
        // Optional parameters
        direction: 'horizontal',
        initialSlide: initialSlide
        // loop: true
    });

    reviewSwiperPhoto.on('slideChange', function () {
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

var chooseFilter = (dom) => {
    const checkExists = dom.classList.contains('active')
    if (checkExists){
        dom.classList.remove('active')
    }else{
        dom.classList.add('active')
    }
}