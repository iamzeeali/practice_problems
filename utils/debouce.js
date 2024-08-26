let debounce = function (func, wait) {
    let id;
    return function (...args) {
        clearTimeout(id);
        id = setTimeout(() => func(...args), wait);
    };
};

const log = debounce(console.log, 500);
