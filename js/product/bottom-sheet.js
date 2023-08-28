const $ = document.querySelector.bind(document)

//~~~~~~~~~~~~~~~~~~~~~~list gift~~~~~~~~~~~~~~~~~~~~~~//
const openSheetGift = $("#open-gift")
const sheetGift = $("#sheet-gift")
const sheetGiftContents = sheetGift.querySelector(".contents")
const draggableArea = sheetGift.querySelector(".draggable-area")
let sheetHeight // in vh

const setSheetHeight = (value) => {
    sheetHeight = Math.max(0, Math.min(100, value))
    sheetGiftContents.style.height = `${sheetHeight}vh`

    if (sheetHeight === 100) {
        sheetGiftContents.classList.add("fullscreen")
    } else {
        sheetGiftContents.classList.remove("fullscreen")
    }
}
const setSheetHeightCus = (value) => {
    sheetGiftContents.style.height = `${value}px`
}
const setIsSheetShown = (value) => {
    sheetGift.setAttribute("aria-hidden", String(!value))
}
// Open the sheet when clicking the 'open sheet' button
openSheetGift.addEventListener("click", () => {
    // setSheetHeight(Math.min(40, 720 / window.innerHeight * 100))
    setSheetHeightCus(327)
    setIsSheetShown(true)
})
// Hide the sheet when clicking the 'OK' button
sheetGift.querySelector("#submit").addEventListener("click", () => {
    setIsSheetShown(false)
})
// Hide the sheet when clicking the background
sheetGift.querySelector(".overlay").addEventListener("click", () => {
    setIsSheetShown(false)
})
//~~~~~~~~~~~~~~~~~~~~~~and list gift~~~~~~~~~~~~~~~~~~~~~~//

//~~~~~~~~~~~~~~~~~~~~~~pick product~~~~~~~~~~~~~~~~~~~~~~//
const openSheetPickProduct = $("#pick-product")
const sheetPick = $("#sheet-pick-product")
const sheetPickContents = sheetPick.querySelector(".contents-pick-product")

const setSheetHeightPick = (value) => {
    sheetPickContents.style.height = `${value}px`
}
const setIsSheetPickShown = (value) => {
    sheetPick.setAttribute("aria-hidden", String(!value))
}
// Open the sheet when clicking the 'open sheet' button
openSheetPickProduct.addEventListener("click", () => {
    // setSheetHeight(Math.min(40, 720 / window.innerHeight * 100))
    setSheetHeightPick(523)
    setIsSheetPickShown(true)
})
// Hide the sheet when clicking the 'OK' button
sheetPick.querySelector("#submit-pick").addEventListener("click", () => {
    setIsSheetPickShown(false)
})
// Hide the sheet when clicking the background
sheetPick.querySelector(".overlay-pick").addEventListener("click", () => {
    setIsSheetPickShown(false)
})
//~~~~~~~~~~~~~~~~~~~~~~pick product~~~~~~~~~~~~~~~~~~~~~~//

// Hide the sheet when clicking the 'close' button
sheetPick.querySelector(".close-sheet-pick").addEventListener("click", () => {
    setIsSheetPickShown(false)
})

const touchPosition = (event) =>
    event.touches ? event.touches[0] : event

let dragPosition

// const onDragStart = (event) => {
//     dragPosition = touchPosition(event).pageY
//     sheetGiftContents.classList.add("not-selectable")
//     draggableArea.style.cursor = document.body.style.cursor = "grabbing"
// }

// const onDragMove = (event) => {
//     if (dragPosition === undefined) return
//
//     const y = touchPosition(event).pageY
//     const deltaY = dragPosition - y
//     const deltaHeight = deltaY / window.innerHeight * 100
//
//     setSheetHeight(sheetHeight + deltaHeight)
//     dragPosition = y
// }

// const onDragEnd = () => {
//     dragPosition = undefined
//     sheetGiftContents.classList.remove("not-selectable")
//     draggableArea.style.cursor = document.body.style.cursor = ""
//
//     if (sheetHeight < 25) {
//         setIsSheetShown(false)
//     } else if (sheetHeight > 75) {
//         setSheetHeight(100)
//     } else {
//         setSheetHeight(50)
//     }
// }

// draggableArea.addEventListener("mousedown", onDragStart)
// draggableArea.addEventListener("touchstart", onDragStart)

// window.addEventListener("mousemove", onDragMove)
// window.addEventListener("touchmove", onDragMove)

// window.addEventListener("mouseup", onDragEnd)
// window.addEventListener("touchend", onDragEnd)