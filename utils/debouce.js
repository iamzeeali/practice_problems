// debouncing is a technique used to limit the rate at which a function is executed. 
// It’s especially useful for scenarios where a function might be triggered frequently, 
// such as handling user input events like scrolling, resizing, or typing.

let debounce = function (fn, wait) {
    let id;
    return function (...args) {
        // cancels the second,third, fourth, etc function calls if one function call is not completed. 
        clearTimeout(id);
        id = setTimeout(() => fn(...args), wait);
    };
};

const log = debounce(console.log('hello'), 50000);

