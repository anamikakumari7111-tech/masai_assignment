// Prompt the user for number of seconds
let time = Number(prompt("Enter the number of seconds for the countdown:"));

console.log("Countdown started...");

// Start interval to decrease every second
let timer = setInterval(() => {
    console.log(time);
    time--;

    // When time reaches below zero, stop interval
    if (time < 0) {
        clearInterval(timer);

        // Use setTimeout for delayed message
        setTimeout(() => {
            console.log("Countdown Complete!");
        }, 500);
    }
}, 1000);

// Detect key press to stop countdown immediately
document.addEventListener("keydown", function (event) {
    if (event.key === "s" || event.key === "S") {
        clearInterval(timer);
        console.log("Countdown stopped by user!");
    }
});