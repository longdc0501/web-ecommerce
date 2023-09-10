function addToCart() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function previewPhoto(info) {
    // Get the snackbar DIV
    var x = document.getElementById("preview-photo")
    var listPhoto = document.getElementById("list-swiper-photo")

    // info cmt
    var cmt = document.getElementById("comment-preview")
    var name = document.getElementById("cust-name-preview")
    var rate = document.getElementById("rate-preview")
    var time = document.getElementById("time-preview")
    var reply = document.getElementById("number-reply-cmt")

    let list = info.listPhoto
    let objActive;
    for ( let i=0; i < list.length ; i++){
        if( list[i].active ){
            objActive = list[i]
            list.splice(i,1)
            break;
        }
    }
    if (objActive){
        list.unshift(objActive)
        listPhoto.innerHTML = ''
        for ( let i=0; i < list.length ; i++) {
            listPhoto.innerHTML += `<div class="swiper-slide"><img src=${list[i].src} alt="photo-product"></div>`
        }
    }
    // console.log(list)

    if (info.comment)
        cmt.textContent = info.comment
    if (info.custName)
        name.textContent = info.custName
    if (info.rateNum)
        rate.textContent = info.rateNum
    if (info.timeLeft)
        time.textContent = info.timeLeft
    if (info.reply)
        reply.textContent = info.reply

    // Add the "show" class to DIV
    x.className = "show-appear";
}

var previewPhotoV2 = (obj) => {
    // Get the snackbar DIV
    var x = document.getElementById("preview-photo")
    var listPhoto = document.getElementById("list-swiper-photo")
    var images = Array.from(obj.parentElement.parentElement.querySelectorAll("img"));

    // Đặt tất cả các ảnh về active: false
    let listAllPhoto = Array.from(images).map(function (image) {
        return {
            src: image.src,
            active: false,
            custName: image.getAttribute("data-cust-name"),
            rateNum: image.getAttribute("data-rate-num"),
            timeLeft: image.getAttribute("data-time-left"),
            reply: image.getAttribute("data-reply"),
            textContent: image.getAttribute("data-text-content"),
        };
    });

    console.log(listPhoto)
    // Đặt ảnh được click về active: true
    listAllPhoto.find(
        function (photo) {
            return photo.src === obj.src;
        }).active = true;

    let list = listAllPhoto
    let objActive;
    let initialSlide = 0;

    for (let i=0; i < list.length ; i++){
        if(list[i].active ) {
            objActive = list[i]
            initialSlide = i
            // list.splice(i,1)
            // var beforeItemActive = list.splice(0,i)
            // console.log(beforeItemActive)
            // console.log(list)
            // list = list.concat(beforeItemActive)
            break;
        }
    }

    if (objActive){
        // list.unshift(objActive)
        // $('#rate-preview').text(objActive.rateNum)
        // $('#time-preview').text(objActive.timeLeft)
        // $('#comment-preview').text(objActive.textContent)
        // $('#cust-name-preview').text(objActive.custName)
        document.getElementById("rate-preview").textContent = objActive.rateNum
        document.getElementById("time-preview").textContent = objActive.timeLeft
        document.getElementById("comment-preview").textContent = objActive.textContent
        document.getElementById("cust-name-preview").textContent = objActive.custName

        // listPhoto.innerHTML = ''
        for (let i=0; i < list.length ; i++) {
            var itemSelect = list[i];
            listPhoto.innerHTML += `<div class="swiper-slide">
                                            <img src=${itemSelect.src}
                                         alt="photo-product"
                                         data-cust-name='${itemSelect.custName}'
                                         data-rate-num='${itemSelect.rateNum}'
                                         data-text-content='${itemSelect.textContent}'
                                         data-time-left='${itemSelect.timeLeft}'
                                         data-reply='${itemSelect.reply}'>
                                         </div>`
        }
    }
    x.className = "show-appear";
    openSwiper(initialSlide)
}

function closePreview(classSwiper){
    document.getElementById("preview-photo").className = ""
    document.getElementById("preview-photo").innerHTML =
        `<div class="action-close" onclick="closePreview('${classSwiper}')">
            <img src="../assets/image/icon/ic_close.svg" alt="close">
        </div>
        <div class="swiper ${classSwiper}">
            <div class="swiper-wrapper" id="list-swiper-photo">
            </div>
        </div>
        <div class="comment-box">
            <div class="box-customer">
                <div class="name-and-rate">
                    <div class="name" id="cust-name-preview">Ngọc xinh</div>
                    <div class="rate">
                        <div class="point-rate" id="rate-preview">5</div>
                        <img src="../assets/image/icon/star-white.svg" alt="star">
                    </div>
                </div>
                <div class="box-time">
                    <img src="../assets/image/icon/time.svg" alt="time">
                    <div class="time" id="time-preview">2 giờ</div>
                </div>
            </div>
            <div class="comment" id="comment-preview">Mình vs bà chị cùng mua đồ.
                Ngồi đợi ib cả call đt ngóc mỏ cả mấy ngày.
                Đến khi chị chuyển tiền rồi thì bảo hết hàng.
                Dư tiền luôn cũng ko nói đc 1 tiếng. Đồ đẹp thì
                đẹp thật, nhưng mất khách ngay từ cách phục vụ.
            </div>
            <div class="sub-comment">
                <img src="../assets/image/icon/message.svg" alt="message">
                <div class="reply-comment" id="number-reply-cmt">24 thảo luận</div>
            </div>
        </div>`
}