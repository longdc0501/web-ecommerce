function addToCart() {
    // Get the snackbar DIV
    var x = document.getElementById("snackbar")

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

function previewPhoto(src) {
    // Get the snackbar DIV
    var x = document.getElementById("preview-photo")
    var photo = document.getElementById("photo-pre")

    console.log(src)

    if (src)
        photo.src = src

    // Add the "show" class to DIV
    x.className = "show-appear";
}

function closePreview(){
    document.getElementById("preview-photo").className = ""
}