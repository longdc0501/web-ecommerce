const $ = document.querySelector.bind(document)

//~~~~~~~~~~~~~~~~~~~~~~list gift~~~~~~~~~~~~~~~~~~~~~~//
const openSheetGift = $("#open-gift")
const sheetGift = $("#sheet-gift")
const sheetGiftContents = sheetGift.querySelector(".contents")
// const draggableArea = sheetGift.querySelector(".draggable-area")
// let sheetHeight // in vh

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

// const touchPosition = (event) =>
//     event.touches ? event.touches[0] : event
//
// let dragPosition
//
// const onDragStart = (event) => {
//     dragPosition = touchPosition(event).pageY
//     sheetGiftContents.classList.add("not-selectable")
//     draggableArea.style.cursor = document.body.style.cursor = "grabbing"
// }
//
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
//
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
//
// draggableArea.addEventListener("mousedown", onDragStart)
// draggableArea.addEventListener("touchstart", onDragStart)
//
// window.addEventListener("mousemove", onDragMove)
// window.addEventListener("touchmove", onDragMove)
//
// window.addEventListener("mouseup", onDragEnd)
// window.addEventListener("touchend", onDragEnd)
//~~~~~~~~~~~~~~~~~~~~~~and list gift~~~~~~~~~~~~~~~~~~~~~~//

//~~~~~~~~~~~~~~~~~~~~~~pick product~~~~~~~~~~~~~~~~~~~~~~//
const openSheetPickProduct = $("#pick-product")
const sheetPick = $("#sheet-pick-product")
const sheetPickContents = sheetPick.querySelector(".contents-pick-product")
const draggableAreaPick = sheetPick.querySelector(".draggable-area")
let sheetPickHeight // in vh

const setSheetPickHeight = (value) => {
    sheetPickHeight = Math.max(0, Math.min(100, value))
    sheetPickContents.style.height = `${sheetPickHeight}vh`

    if (sheetPickHeight === 100) {
        sheetPickContents.classList.add("fullscreen")
    } else {
        sheetPickContents.classList.remove("fullscreen")
    }
}

const setSheetHeightPick = (value) => {
    sheetPickHeight = Math.max(0, Math.min(100, value))
    sheetPickContents.style.height = `${value}px`
    if (sheetPickHeight === 100) {
        sheetPickContents.classList.add("fullscreen")
    } else {
        sheetPickContents.classList.remove("fullscreen")
    }
}
const setIsSheetPickShown = (value) => {
    sheetPick.setAttribute("aria-hidden", String(!value))
}
// Open the sheet when clicking the 'open sheet' button
openSheetPickProduct.addEventListener("click", () => {
    // setSheetHeight(Math.min(60, 720 / window.innerHeight * 100))
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

const touchPositionPick = (event) =>
    event.touches ? event.touches[0] : event

let dragPositionPick

const onDragStartPick = (event) => {
    dragPositionPick = touchPositionPick(event).pageY
    sheetPickContents.classList.add("not-selectable")
    draggableAreaPick.style.cursor = document.body.style.cursor = "grabbing"
}

const onDragMovePick = (event) => {
    if (dragPositionPick === undefined) return

    const y = touchPositionPick(event).pageY
    const deltaY = dragPositionPick - y
    const deltaHeight = deltaY / window.innerHeight * 100

    setSheetPickHeight(sheetPickHeight + deltaHeight)
    dragPositionPick = y
}

const onDragEndPick = () => {
    dragPositionPick = undefined
    sheetPickContents.classList.remove("not-selectable")
    draggableAreaPick.style.cursor = document.body.style.cursor = ""

    if (sheetPickHeight < 25) {
        setIsSheetPickShown(false)
    } else if (sheetPickHeight > 75) {
        setSheetPickHeight(100)
    } else {
        setSheetPickHeight(sheetPickHeight)
    }
}

draggableAreaPick.addEventListener("mousedown", onDragStartPick)
draggableAreaPick.addEventListener("touchstart", onDragStartPick)

window.addEventListener("mousemove", onDragMovePick)
window.addEventListener("touchmove", onDragMovePick)

window.addEventListener("mouseup", onDragEndPick)
window.addEventListener("touchend", onDragEndPick)