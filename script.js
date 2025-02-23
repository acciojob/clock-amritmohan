//your JS code here. If required.

function updateTimer() {
	let timer = document.getElementById("timer");
	let date = new Date();
	timer.innerText = date.toLocaleString();
}

setInterval(updateTimer, 1000);
updateTimer();