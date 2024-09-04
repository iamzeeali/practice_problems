Array.prototype.myMap = function (callbackFn, thisArg) {
    // Ensure callbackFn is a function
    if (
        typeof callbackFn !== "function" ||
        !callbackFn.call ||
        !callbackFn.apply
    ) {
        throw new TypeError(`${callbackFn} is not a function`);
    }

    const len = this.length; // Get the length of the array
    const A = new Array(len); // Create a new array with the same length
    let k = 0; // Initialize the index

    // Iterate over the array
    while (k < len) {
        // Check if the index exists in the array (handles sparse arrays)
        const kPresent = Object.hasOwn(this, k);
        if (kPresent) {
            const kValue = this[k]; // Get the value at index k
            const mappedValue = callbackFn.call(thisArg, kValue, k, this); // Apply the callback function
            A[k] = mappedValue; // Store the result in the new array
        }
        k = k + 1; // Move to the next index
    }

    return A; // Return the new array with mapped values
};


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.myMap(el => el * 2))