module.exports = class LinkedList {
    constructor() {
        const el1 = {data: {value: 1}, next: null};
        const el2 = {data: {value: 2}, next: null};
        const el3 = {data: {value: 3}, next: null};

        // link elements together
        el1.next = el2;
        el2.next = el3;

        // set a pointer to the first node
        this.head = el1;
        this.size = 3;
    }

    get(index) {
        let counter = 0;
        let element = this.head;

        while (counter < index) {
            element = element.next;
            counter++;
        }

        return element.data;
    }
};