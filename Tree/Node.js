class Node {

    /**
     * @param {*} [value] - node data
     */
    constructor(value) {
        this.left = null;
        this.right = null;
        this.parent = null;
        this.value = value;
    }

    /**
     * @param node
     * @returns {Node}
     */
    setLeft(node) {

        if (this.left) {
            this.left.parent = null;
        }

        this.left = node;
        this.left.parent = this;

        return this;
    }

    /**
     *
     * @param node
     * @returns {Node}
     */
    setRight(node) {

        if (this.right) {
            this.right.parent = null;
        }

        this.right = node;
        this.right.parent = this;

        return this;
    }

}

module.exports = Node;

// usage
/*let n1 = new Node(4);
let n2 = new Node(2);
let n3 = new Node(5);
let n4 = new Node(-1);
let n5 = new Node(3);

n1.left = n2;
n1.right = n3;

n2.left = n4;
n2.right = n5;

console.log(n1.value); // 4
console.log(n1.left.value); // 2
console.log(n1.right.value); // 5
console.log(n1.left.left.value); // -1*/
