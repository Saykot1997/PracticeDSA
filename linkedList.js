class Node {
    constructor(value, next = null) {
        this.data = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    // insert at start of list

    insertFirst(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    // insert at end of list

    insertLast(value) {

        if (this.head === null) {

            this.insertFirst(value);

        } else {

            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = new Node(value);
            this.length++;
        }
    }


    // insert at any position

    insertAt(value, position) {

        if (position > this.length || position < 0) {

            throw new Error('Position is out of range');

        } else if (position === 0) {

            this.insertFirst(value);
            return;

        } else {

            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {

                previous = current;
                current = current.next;
                index++;
            }

            let newNode = new Node(value, current);
            previous.next = newNode;
            this.length++;
        }
    }

    // delete first node

    deleteFirst() {

        if (this.head === null) {

            throw new Error('List is empty');

        } else {

            this.head = this.head.next;
            this.length--;
        }
    }

    // delete last node

    deleteLast() {

        if (this.head === null) {

            throw new Error('List is empty');

        } else if (this.head.next === null) {

            this.head = null;
            this.length--;

        } else {

            let current = this.head;
            let previous = null;

            while (current.next) {
                previous = current;
                current = current.next;
            }

            previous.next = null;
            this.length--;
        }
    }


    // delete at any position

    deleteAt(position) {

        if (position >= this.length || position < 0) {

            throw new Error('Position is out of range');

        } else if (position === 0) {

            this.deleteFirst();
            return;

        } else if (position === this.length - 1) {

            this.deleteLast();
            return;

        } else {

            let current = this.head;
            let previous = null;
            let index = 0;

            while (index < position) {

                previous = current;
                current = current.next;
                index++;
            }
            previous.next = current.next;
            this.length--;
        }
    }

    // print list

    printList() {
        let current = this.head;
        let result = '';
        while (current) {
            result += current.data + '->';
            current = current.next;
        }
        console.log(result);
    }

    // get length of list

    getLength() {
        console.log(this.length);
    }
}


const list = new LinkedList();
list.insertFirst(1);
list.insertLast(2);
list.insertAt(5, 1);
// list.deleteFirst();
// list.deleteLast();
// list.deleteAt(0);
list.printList();
list.getLength();

