const ArrayList = require('./array-list');
const LinkedList = require('./linked-list');

const alist = new ArrayList();
const llist = new LinkedList();

const afiltered = [];
for (let i = 0; i < alist.size; i++) {
    const element = alist.get(i);
    if (element.value > 2) {
        afiltered.push(element);
    }
}

const lfiltered = [];
for (let i = 0; i < llist.size; i++) {
    const element = llist.get(i);
    if (element.value > 2) {
        lfiltered.push(element);
    }
}

console.log(afiltered);
console.log(lfiltered);
