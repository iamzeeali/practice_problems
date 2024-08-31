class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store queue elements
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the front element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Return a message if the queue is empty
        }
        return this.items.shift(); // Remove the first element (front of the queue)
    }

    // Method to view the front element of the queue without removing it
    front() {
        if (this.isEmpty()) {
            return "Queue is empty"; // Return a message if the queue is empty
        }
        return this.items[0]; // Return the first element (front of the queue)
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0; // Return true if the queue has no elements
    }

    // Method to get the size of the queue
    size() {
        return this.items.length; // Return the number of elements in the queue
    }

    // Method to clear the queue
    clear() {
        this.items = []; // Reset the items array to an empty array
    }

    // Method to print the queue elements
    printQueue() {
        console.log(this.items.join(' ')); // Print queue elements separated by spaces
    }
}


// ===============================================================================================
// Create a new queue
let queue = new Queue();

// Add elements to the queue
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

// Print the queue
queue.printQueue(); // Output: 10 20 30

// View the front element
console.log(queue.front()); // Output: 10

// Remove the front element
console.log(queue.dequeue()); // Output: 10

// Print the queue again
queue.printQueue(); // Output: 20 30

// Check if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Get the size of the queue
console.log(queue.size()); // Output: 2

// Clear the queue
queue.clear();

// Check if the queue is empty after clearing
console.log(queue.isEmpty()); // Output: true