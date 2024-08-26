Array.prototype.myFilter = function (callbackFn, thisArg) {
    if (this == null) {
        throw new TypeError("myFilter called on null or undefined");
    } if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + 'is not a function');
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this && callbackFn.call(this, this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};