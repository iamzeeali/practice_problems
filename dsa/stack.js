class Stack {
    constructor() {
        this.items = []; // Initialize an empty array to store stack elements
    }

    // Method to add an element to the top of the stack
    push(element) {
        this.items.push(element);
    }

    // Method to remove and return the top element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if the stack is empty
        }
        return this.items.pop(); // Remove the last element (top of the stack)
    }

    // Method to view the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            return "Stack is empty"; // Return a message if the stack is empty
        }
        return this.items[this.items.length - 1]; // Return the last element (top of the stack)
    }

    // Method to check if the stack is empty
    isEmpty() {
        return this.items.length === 0; // Return true if the stack has no elements
    }

    // Method to get the size of the stack
    size() {
        return this.items.length; // Return the number of elements in the stack
    }

    // Method to clear the stack
    clear() {
        this.items = []; // Reset the items array to an empty array
    }

    // Method to print the stack elements
    printStack() {
        console.log(this.items.join(' ')); // Print stack elements separated by spaces
    }
}


// ==================================================================================
// Create a new stack
let stack = new Stack();

// Add elements to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Print the stack
// stack.printStack(); // Output: 10 20 30

// // View the top element
// console.log(stack.peek()); // Output: 30

// // Remove the top element
console.log(stack.pop()); // Output: 30
console.log(stack)

// // Print the stack again
// stack.printStack(); // Output: 10 20

// // Check if the stack is empty
// console.log(stack.isEmpty()); // Output: false

// // Get the size of the stack
// console.log(stack.size()); // Output: 2

// // Clear the stack
// stack.clear();

// // Check if the stack is empty after clearing
// console.log(stack.isEmpty()); // Output: true