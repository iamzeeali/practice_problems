// Throttling is another technique used to limit the rate at which a function is executed. 
// Unlike debouncing, which delays execution until a specified period of inactivity, 
// throttling ensures that the function is executed at most once in a specified interval.

// ------------------------------------------------------------------------------------------------
let throttle = function (fn, limit) {
    let lastCall = 0; // Timestamp of the last function call

    return function (...args) {
        const now = Date.now(); // Current timestamp
        // Check if enough time has passed since the last call
        if (now - lastCall >= limit) {
            lastCall = now; // Update the timestamp of the last call
            fn(...args); // Call the function with the latest arguments
        }
    };
};
// ------------------------------------------------------------------------------------------------

// Function to throttle
function logMessage(message) {
    console.log(message);
}

// Create a throttled version of logMessage
const throttledLog = throttle(logMessage, 1000);

// Call the throttled function multiple times
throttledLog('Hello');
throttledLog('Hello, World!');
throttledLog('Hello, Throttle!');

// Only "Hello" will be logged immediately and "Hello, Throttle!" after 1 second