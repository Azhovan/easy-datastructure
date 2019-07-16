class HashTable {

    constructor() {
        this.hashList = [];
    }

    /**
     * @param input string
     * @returns {number}
     */
    getHashCodeFrom(input) {

        let sum = 0;

        for (let i = 0; i < input.length; i++) {
            let index = input.charCodeAt(i);
            sum += index;
        }

        return (sum % this.dataLength);
    }

    /**
     * @param data
     */
    insert(data) {

        if (!data instanceof Array) {
            console.log('data should be array' + (typeof data) + ' given');
        }

        this.dataLength = data.length;

        for (let i = 0; i < data.length; i++) {
            let index = this.getHashCodeFrom(data[i]);
            this.pushData(index, data[i]);
        }
    }

    pushData(index, value) {

        if (this.hashList.hasOwnProperty(index)) {
            let column = this.hashList[index];
            column.push(value);
            this.hashList[index] = column;

        } else {
            let column = [];
            column.push(value);
            this.hashList[index] = column;
        }
    }

    /**
     * @param input string
     * @returns {Array|number|*}
     */
    find(input) {
        let index = this.getHashCodeFrom(input);

        if (this.getHashList(index) !== -1) {
            let list = this.getHashList(index);
            for (let i = 0; i < list.length; i++) {
                if (list[i] === input)
                    return true;
            }

        }

        return false;
    }

    /**
     *
     * @param key
     * @returns {Array|number|*}
     */
    getHashList(key) {

        if (this.hashList.hasOwnProperty(key)) {
            return this.hashList[key];
        }

        return -1;
    }
}


const obj = new HashTable();

obj.insert([
    'mike',
    'sarah',
    'nancy',
]);

console.log(obj.find('mike'));