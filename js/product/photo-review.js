var swiperPhotoPreview = new Swiper('.swiper-photo-pre', {
    // Optional parameters
    direction: 'horizontal',
    loop: true
});

var getUrlParameter = (name) => {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var dataShow;

var getDataByUrlParam = () => {
    // console.log(getUrlParameter('_ijt'))
    const typeShow = getUrlParameter('typeShow')
    var dom = document.querySelector('#grid-product')
    if (typeShow) {
        dom.innerHTML = '';
        if (typeShow === 'ALL') {
            const fakeData = [{
                listPhoto: [
                    {
                        src: '../assets/image/product/photo-product.png',
                        active: false
                    },
                    {
                        src: '../assets/image/product/whathot.png',
                        active: false
                    },
                    {
                        src: '../assets/image/product/review-product.png',
                        active: false
                    }], comment: 'Đây là comment truyền từ ngoài vào',
                custName: 'Đỗ Hà',
                rateNum: 5,
                timeLeft: '2 phút',
                reply: '20 thảo luận',
                custName: 'Đỗ Hà',
                rateNum: 5,
                timeLeft: '2 phút',
                reply: '20 thảo luận'
            },
                {
                    listPhoto: [
                        {
                            src: '../assets/image/product/review-product1.png',
                            active: false
                        },
                        {
                            src: '../assets/image/product/review-product.png',
                            active: false
                        }], comment: 'Các Mom nên thử dùng đi Các Mom ' +
                        'nên thử dùng đi ạ.đến bây giờ e mới tìm thấy chân ái.sau ' +
                        'khi tìm hiểu và dùng nhiều loại.tinh chất tự nhiên nên rất yên tâm',
                    custName: 'Tiểu Hý',
                    rateNum: 3.5,
                    timeLeft: '8 giờ',
                    reply: '2 thảo luận'
                }]
            dataShow = fakeData
        } else if (typeShow === 'CMT') {
            const fakeData = [{
                listPhoto: [
                    {
                        src: '../assets/image/product/review-product1.png',
                        active: false
                    },
                    {
                        src: '../assets/image/product/review-product.png',
                        active: false
                    }], comment: 'Các Mom nên thử dùng đi Các Mom ' +
                    'nên thử dùng đi ạ.đến bây giờ e mới tìm thấy chân ái.sau ' +
                    'khi tìm hiểu và dùng nhiều loại.tinh chất tự nhiên nên rất yên tâm',
                custName: 'Tiểu Hý',
                rateNum: 3.5,
                timeLeft: '8 giờ',
                reply: '2 thảo luận'
            }]
            dataShow = fakeData
        }
    }
    console.log(dataShow)
    if (dataShow) {
        for (let i = 0; i < dataShow.length; i++) {
            if (dataShow[i].listPhoto) {
                for (let j = 0; j < dataShow[i].listPhoto.length; j++) {
                    dom.innerHTML += `<div class="grid-item" onclick="showPreview(${i}, ${j})" ><img src=${dataShow[i].listPhoto[j].src} alt="product"></div>`
                }
            }
        }
    }
}

var showPreview = (index_i, index_j) => {
    for (let a = 0; a < dataShow.length; a++) {
        if (dataShow[a].listPhoto) {
            for (let b = 0; b < dataShow[a].listPhoto.length; b++) {
                dataShow[a].listPhoto[b].active = a === index_i && b === index_j;
            }
        }
    }
    console.log(dataShow)
    previewPhoto(dataShow[index_i])
}

// get data
window.onload = getDataByUrlParam();