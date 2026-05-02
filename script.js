/* Az óra frissítése UTC formátumban[cite: 1] */
function showTime() {
    const timeDisplay = document.getElementById('currentTime');
    if (timeDisplay) {
        timeDisplay.innerHTML = new Date().toUTCString();[cite: 1]
    }
}

// Indítás és ismétlés 1 másodpercenként[cite: 1]
showTime();
setInterval(function () {
    showTime();
}, 1000);[cite: 1]
