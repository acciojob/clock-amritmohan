//your JS code here. If required.

document.addEventListener("DOMContentLoaded", () => {
    function updateTimer() {
        let timer = document.getElementById("timer");
        if (timer) {
            timer.innerText = new Date().toLocaleString();
        }
    }

    setInterval(updateTimer, 1000);
    updateTimer(); // Run once immediately after loading
});
