const ArrayList = require('./array-list');
const LinkedList = require('./linked-list');

const alist = new ArrayList();
const llist = new LinkedList();

const afiltered = [];
for (let element of alist) {
    if (element.value > 2) {
        afiltered.push(element);
    }
}

const lfiltered = [];
for (let element of llist) {
    if (element.value > 2) {
        lfiltered.push(element);
    }
}

console.log(afiltered);
console.log(lfiltered);
