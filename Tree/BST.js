const Node = require('./Node');

class BST {

    /**
     *
     * @param {Node} root
     */
    constructor(root) {
        this.root = root;
        this.travers = [];

    }

    /*insertNode(current, value)
    # Pre: current is the node to start from
    # Post: value has been placed in the correct location in the tree
    # repetitive value will be ignored

        if value < current.value
            if current.left = ø
                current.left ← node(value)
            else
                InsertNode(current.left, value)
            end if
        else
        if current.right = ø
            current.right ← node(value)
        else
            InsertNode(current.right, value)
        end if
    end if
    end insertNode*/

    /**
     *
     * @param node
     * @param current
     * @returns {BST}
     */
    insertNode(node, current) {

        if (node.value < current.value) {
            if (!current.left) {
                current.setLeft(node);
            } else {
                this.insertNode(node, current.left);
            }

        } else if (node.value > current.value) {
            if (!current.right) {
                current.setRight(node);
            } else {
                this.insertNode(node, current.right)
            }

        }

        return this;

    }

    /**
     *
     * @param {Node} root
     * @returns {*[]}
     */

    inOrder(root) {

        // left
        if (root.left) {
            this.inOrder(root.left);
        }

        this.travers.push(root.value);


        //right
        if (root.right) {
            this.inOrder(root.right);
        }

        return this.travers;
    }

    preOrder(root)
    {
        this.travers.push(root.value);

        if(root.left) {
            this.preOrder(root.left);
        }

        if(root.right) {
            this.preOrder(root.right)
        }

        return this.travers;

    }

}

// usage
// make a bst
const root = new Node(4);
let bst = new BST(root);

bst.insertNode(new Node(2), root);
bst.insertNode(new Node(5), root);
bst.insertNode(new Node(0), root);
bst.insertNode(new Node(3), root);

// in-order
// console.log(bst.inOrder(bst.root)); // [ 0, 2, 3, 4, 5 ]

// pre-order
console.log(bst.preOrder(bst.root)); // [ 4, 2, 0, 3, 5 ]
