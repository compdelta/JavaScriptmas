const gallery = document.getElementById("gallery")
const previousButton = document.getElementById("previous")
const nextButton = document.getElementById("next")

let xPosition = 0;

previousButton.addEventListener("click", () => {
        if (xPosition != 0) {
            xPosition = xPosition + 220
            gallery.style.transform = `translateX(${xPosition}px)`
            if (xPosition == -660) {
                nextButton.classList.remove("inactive")
            }
            if (xPosition == 0) {
                previousButton.classList.add("inactive")
            }
        }
})

nextButton.addEventListener("click", () => {
    if (xPosition != -880) {
        xPosition = xPosition - 220
        gallery.style.transform = `translateX(${xPosition}px)`
        if (xPosition == -220) {
            previousButton.classList.remove("inactive")
        }
        if (xPosition == -880) {
            nextButton.classList.add("inactive")
        }
    }
})