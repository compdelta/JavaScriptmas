const charCount = document.getElementById("charCount");
const tweetEntry = document.getElementById("tweet");
const submitButton = document.getElementById("submit");
let available = 140;

tweetEntry.value = "";
charCount.textContent = `${available} / 140`

function charLimitChange() {

    available = 140 - tweetEntry.value.length
    charCount.textContent = `${available} / 140`
    
    if (available <= 10) {
        charCount.style.color = "red";
    } else {
        charCount.style.color = "lightgreen";
    }

    if (available < 0) {
        submitButton.disabled = true;
        submitButton.style.backgroundColor = "grey";
    } else {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "#1DA1F2";
    }
}