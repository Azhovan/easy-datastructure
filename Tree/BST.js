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
     * If current node === needle, return;
     * else Go to left
     *      Go to right
     * @param value
     * @param root
     * @returns {*|boolean|boolean|*}
     */
    find(value, root) {
        if (value === root.value) {
            return root;
        }

        if (value < root.value) {
            if (root.left) {
                return this.find(value, root.left);
            }
        }

        if (value > root.value) {
            if (root.right) {
                return this.find(value, root.right);
            }
        }

        return false;
    }

    /**
     * Find it
     * Delete it
     *    - if it does not have children ===> just delete it
     *    - if it does have ONLY one child ===> replace the node with it's child
     *    - if it does have 2 children ===> replace it with smallest key in right-subtree
     * @param value
     * @returns {*|boolean|boolean}
     */
    delete(value) {
        let node = this.find(value, this.root);
        if (!node) {
            return false;
        }

        if (this.getChildren(node).length === 0) {

            if (BST.isLeftChild(node)) {
                node.parent.left = null;
            } else if (BST.isRightChild(node)) {
                node.parent.right = null;
            }

            return node;

        } else if (this.getChildren(node).length === 1) {

            if (node.left) {
                node.left.parent = node.parent;

                if (BST.isLeftChild(node)) {
                    node.parent.left = node.left;
                } else if (BST.isRightChild(node)) {
                    node.parent.right = node.left;
                }
            } else if (node.right) {
                node.right.parent = node.parent;

                if (BST.isLeftChild(node)) {
                    node.parent.left = node.right;
                } else if (BST.isRightChild(node)) {
                    node.parent.right = node.right;
                }
            }

            return node;

        } else if (this.getChildren(node).length === 2) {
            // find the smallest key in right subtree
            // replace the node with it
            let smallest = this.smallest(node.right);
            node.value = smallest.value;

            if (BST.isLeftChild(smallest)) {
                smallest.parent.left = null;
            } else if (BST.isRightChild(smallest)) {
                node.parent.right = null;
            }

            return node;
        }
    }

    /**
     * Go  left
     * Process current node
     * Go right
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

    /**
     * Process current node
     * Go to left
     * Go to right
     *
     * @param root
     * @returns {Array}
     */
    preOrder(root) {
        this.travers.push(root.value);

        if (root.left) {
            this.preOrder(root.left);
        }

        if (root.right) {
            this.preOrder(root.right)
        }

        return this.travers;

    }

    /**
     * Go left
     * Go right
     * process current node
     *
     * @param root
     * @returns {Array}
     */
    postOrder(root) {

        if (root.left) {
            this.postOrder(root.left);
        }

        if (root.right) {
            this.postOrder(root.right);
        }

        this.travers.push(root.value);

        return this.travers;
    }

    /**
     *  Determine if current node is his father right child
     * @param node
     * @returns {boolean}
     */
    static isRightChild(node) {
        return node.parent.right === node;
    }

    /**
     * Determine if current node is his father left child
     * @param node
     * @returns {boolean}
     */
    static isLeftChild(node) {
        return node.parent.left === node;
    }

    /**
     * Get children in subtree
     * @param node
     * @returns {*[]}
     */
    getChildren(node) {
        let children = this.inOrder(node);

        // exclude the node itself
        children.splice(children.indexOf(node.value), 1);

        return children;
    }

    /**
     * Fin the smallest node in subtree
     * @param root
     * @returns {*}
     */
    smallest(root) {
        if (root.left) {
            return this.smallest(root.left);
        }

        return root.value;
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
// console.log(bst.preOrder(bst.root)); // [ 4, 2, 0, 3, 5 ]

//post-order
// console.log(bst.postOrder(root));

// find and element with value = 5
// console.log(bst.find(5, bst.root));

// find all child
// console.log(bst.getChildren(bst.find(2, bst.root)).length); // 2

// node is left child or is right child of his parent
// console.log(BST.isLeftChild(bst.find(2, bst.root))); // true
// console.log(BST.isRightChild(bst.find(5, bst.root))); // true

// smallest node in subtree
// console.log(bst.smallest(bst.find(2, bst.root)));

// delete node = 2 ;
// console.log(bst.delete(0));
// console.log('in-order: ', bst.inOrder(bst.root));
