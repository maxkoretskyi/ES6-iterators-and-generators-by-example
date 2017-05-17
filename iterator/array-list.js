class ForEachArrayListIterator {
    [Symbol.iterator]() {
        const self = this;
        let i = 0;

        return {
            next() {
                let value, done = true;
                if (self.list[i] !== undefined) {
                    value = self.list[i];
                    done = false;
                    i += 1;
                }

                return {
                    value: value,
                    done: done
                }
            }
        };
    }
}

module.exports = class ArrayList extends ForEachArrayListIterator {
    constructor() {
        super();

        const el1 = {value: 1};
        const el2 = {value: 2};
        const el3 = {value: 3};

        this.list = [];
        this.list.push(el1);
        this.list.push(el2);
        this.list.push(el3);

        this.size = 3;
    }

    get(index) {
        return this.list[index];
    }
};