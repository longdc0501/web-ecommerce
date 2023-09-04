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
    var cmt = document.getElementById("comment-preview")

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


    // Add the "show" class to DIV
    x.className = "show-appear";
}

function closePreview(){
    document.getElementById("preview-photo").className = ""
}