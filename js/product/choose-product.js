function chooseProduct(DOM) {
    var parent = DOM.parentNode;
    var listChild = parent.children
    for (let i = 0; i < listChild.length; i++) {
        listChild.item(i).classList.remove("active-filter")
    }
    DOM.classList.add("active-filter")
}

function changeQuantity(isAdd) {
    var quantity_dom = $("#quantity-product")
    var number = +quantity_dom.textContent
    var quantity_new = 1
    if (isAdd) {
        quantity_new = number + 1
    } else if (number > 1) {
        quantity_new = number - 1
    }
    if (quantity_new < 10) {
        quantity_dom.textContent = "0" + quantity_new
    } else {
        quantity_dom.textContent = quantity_new
    }
}