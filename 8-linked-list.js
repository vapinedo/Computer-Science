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

    pop() {
        // check if linked list is empty
        if (!this.head) { return undefined; }        
        
        let pre = this.head;
        let temp = this.head;

        while(temp.next) {
            pre = temp;
            temp = temp.next;
        }

        this.tail = pre;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
}

let myLinkedList = new LinkedList(11);
myLinkedList.push(3);
myLinkedList.push(27);
myLinkedList.push(7);
myLinkedList.unshift(4);