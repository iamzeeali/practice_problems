Array.prototype.myFilter = function (callbackFn, thisArg) {
    console.log(thisArg)
    if (this == null) {
        throw new TypeError("myFilter called on null or undefined");
    }
    if (typeof callbackFn !== 'function') {
        throw new TypeError(callbackFn + ' is not a function');
    }

    const result = [];
    for (let i = 0; i < this.length; i++) {
        //. Check if the element at index i exists in the array and satisfies the callback function.
        //. JavaScript arrays can be sparse, meaning they can have “holes” where an index is missing or undefined. The in operator checks if a given index exists in the array. This helps ensure that the callbackFn is only applied to elements that are actually present in the array.
        //. The callbackFn should return a boolean value. If it returns true, the element passes the test, and the element is added to the result array. 
        if (i in this && callbackFn.call(undefined, this[i], i, this)) {
            result.push(this[i]);  // If true, add the element to the result array.
        }
    }
    return result;
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.myFilter(el => el > 2))