// Node class representing each element in the linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// LinkedList class managing the linked list
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Check if the list is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the number of nodes in the list
    getSize() {
        return this.size;
    }

    // Add a new node with the specified value at the beginning of the list
    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Add a new node with the specified value at the end of the list
    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    // Insert a new node with the specified value at a specific position
    insert(value, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        const newNode = new Node(value);

        if (position === 0) {
            this.prepend(value);
            return;
        }

        let current = this.head;
        let previous = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.next;
            index++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // Remove the first node with the specified value
    remove(value) {
        if (this.isEmpty()) {
            console.log("List is empty");
            return;
        }

        let current = this.head;
        let previous = null;

        while (current) {
            if (current.value === value) {
                if (!previous) {  // Node to remove is the head
                    this.head = current.next;
                } else {
                    previous.next = current.next;
                }
                this.size--;
                return;
            }
            previous = current;
            current = current.next;
        }

        console.log("Node not found");
    }

    // Print the list as a string
    print() {
        if (this.isEmpty()) {
            console.log("List is empty");
        } else {
            let current = this.head;
            let listString = "";
            while (current) {
                listString += current.value + " -> ";
                current = current.next;
            }
            console.log(listString + "null");
        }
    }

    // Find the position of a node with a specific value
    find(value) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.next;
            index++;
        }

        return -1;  // Not found
    }

    // Clear the entire linked list
    clear() {
        this.head = null;
        this.size = 0;
    }

    // Reverse the linked list
    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }

    // Get the value of the first node
    getFirst() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    // Get the value of the last node
    getLast() {
        if (this.isEmpty()) {
            return null;
        }

        let current = this.head;
        while (current.next) {
            current = current.next;
        }

        return current.value;
    }

    // Get the value of a node at a specific position
    getAt(position) {
        if (position < 0 || position >= this.size) {
            return null;  // Invalid position
        }

        let current = this.head;
        let index = 0;

        while (index < position) {
            current = current.next;
            index++;
        }

        return current.value;
    }
}

// Example usage:
const list = new LinkedList();
list.append(10);
list.append(20);
list.prepend(5);
list.insert(15, 2);
list.print();  // Output: 5 -> 10 -> 15 -> 20 -> null
console.log("Find 15:", list.find(15));  // Output: Find 15: 2
console.log("First:", list.getFirst());  // Output: First: 5
console.log("Last:", list.getLast());  // Output: Last: 20
list.reverse();
list.print();  // Output: 20 -> 15 -> 10 -> 5 -> null
list.clear();
list.print();  // Output: List is empty