    var showSubComment = (index) => {
    var displayCountdown = document.querySelector(`#sub-comment-${index}`);

    if (displayCountdown){
        if (displayCountdown.style.display === ''){
            displayCountdown.style.display = 'none'
        }else{
            displayCountdown.style.display = ''
        }
    }
}