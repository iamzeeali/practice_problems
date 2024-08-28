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
        this.head = null;  // Reference to the first node
        this.tail = null;  // Reference to the last node
        this.size = 0;     // Initialize the size of the list
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    insert(value, position) {
        if (position < 0 || position > this.size) {
            console.log("Invalid position");
            return;
        }

        if (position === 0) {
            this.prepend(value);
            return;
        }

        if (position === this.size) {
            this.append(value);
            return;
        }

        const newNode = new Node(value);
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
                    if (this.head === null) {
                        this.tail = null;
                    }
                } else {
                    previous.next = current.next;
                    if (!current.next) {  // Node to remove is the tail
                        this.tail = previous;
                    }
                }
                this.size--;
                return;
            }
            previous = current;
            current = current.next;
        }

        console.log("Node not found");
    }

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

    clear() {
        this.head = this.tail = null;
        this.size = 0;
    }

    reverse() {
        let previous = null;
        let current = this.head;
        let next = null;
        this.tail = this.head;

        while (current) {
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }

        this.head = previous;
    }

    getFirst() {
        return this.head ? this.head.value : null;
    }

    getLast() {
        return this.tail ? this.tail.value : null;
    }

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
console.log("Tail:", list.getLast());  // Output: Tail: 20
console.log("Find 15:", list.find(15));  // Output: Find 15: 2
list.reverse();
list.print();  // Output: 20 -> 15 -> 10 -> 5 -> null
console.log("Tail after reverse:", list.getLast());  // Output: Tail after reverse: 5
list.clear();
list.print();  // Output: List is empty