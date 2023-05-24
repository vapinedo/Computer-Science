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
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
console.dir(myLinkedList);

// myLinkedList.pop();
// console.dir(myLinkedList);