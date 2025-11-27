// Start repeating "Loading..." every 1 second
let loading = setInterval(() => {
    console.log("Loading...");
}, 1000);

// After 5 seconds, stop loading and print final message
setTimeout(() => {
    clearInterval(loading);
    console.log("Loaded Successfully!");
}, 5000);