const openBtnEl = document.getElementById("open-button")
const navContainerEl = document.getElementById("navigation-container")
const closeBtnEl = document.getElementById("close-button")
let isActive = false

openBtnEl.addEventListener("click", () => {
    navContainerEl.classList.add("active")
})

closeBtnEl.addEventListener("click", () => {
    navContainerEl.classList.remove("active")
})