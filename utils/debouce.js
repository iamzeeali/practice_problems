// debouncing is a technique used to limit the rate at which a function is executed. 
// It’s especially useful for scenarios where a function might be triggered frequently, 
// such as handling user input events like scrolling, resizing, or typing.

// ------------------------------------------------------------------------------------------------
let debounce = function (fn, wait) {
    let id; // Variable to store the timeout ID

    return function (...args) {
        // Clear the previous timeout if a new call is made before the wait period elapses
        clearTimeout(id);

        // Set a new timeout to call the function after the specified wait period
        id = setTimeout(() => fn(...args), wait);
    };
};
// ------------------------------------------------------------------------------------------------

// Function to debounce
function logMessage(message) {
    console.log(message);
}

// Create a debounced version of logMessage
const debouncedLog = debounce(logMessage, 1000);

// Call the debounced function multiple times
debouncedLog('Hello');
debouncedLog('Hello, World!');
debouncedLog('Hello, Debounce!');

// Only "Hello, Debounce!" will be logged after 1 second