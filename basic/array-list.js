module.exports = class ArrayList {
    constructor() {
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