Array.prototype.myMap = function (callbackFn, thisArg) {
    if (this == null) {
        throw new TypeError("myMap called on null or undefined");
    } if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'is not a function');
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        // . Check if there is any holes in the array then push.
        if (i in this) {
            result.push(callbackFn.call(thisArg, this[i], i, this))
        }
    }
    return result;
};


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.myMap(el => el * 2))