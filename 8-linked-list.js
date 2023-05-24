class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    push(value) {
        let newNode = new Node(value);

        // check if linked list is emtpy
        if (!this.head) { 
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; 
            this.tail = newNode;
        }

        this.length++;
        return this;
    }
}

let myLinkedList = new LinkedList(7);
myLinkedList.push(4);
console.dir(myLinkedList);