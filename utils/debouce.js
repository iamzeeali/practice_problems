// debouncing is a technique used to limit the rate at which a function is executed. 
// It’s especially useful for scenarios where a function might be triggered frequently, 
// such as handling user input events like scrolling, resizing, or typing.

let debounce = function (func, wait) {
    let id;
    return function (...args) {
        // cancels the second,thirs.. calls if one function call is not completed. 
        clearTimeout(id);
        id = setTimeout(() => func(...args), wait);
    };
};

const log = debounce(console.log('hello'), 50000);

