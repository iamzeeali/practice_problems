Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (this == null) {
        throw new TypeError("myReduce called on null or undefined");
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }

    let accumulator = initialValue;
    let startIndex = 0;

    // If no initialValue is provided, use the first element of the array
    if (initialValue === undefined) {
        if (this.length === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
        accumulator = this[0];
        startIndex = 1;
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            accumulator = callbackFn.call(undefined, accumulator, this[i], i, this);
        }
    }

    return accumulator;
};


const arr = [1, 2, 3];
console.log(arr.myReduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0))
