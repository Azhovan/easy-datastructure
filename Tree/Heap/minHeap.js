class MinHeap {

    constructor() {
        this.heap = [];
    }

    getleftIndex(index) {
        return 2 * index + 1;
    }

    getRightIndex(index) {
        return 2 * index + 2;
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    insert(item) {

        let index = this.heap.length;
        this.heap.push(item);
        this.siftUp(index);
    }

    siftUp(index) {

        let parent = this.getParentIndex(index);

        while (index > 0 && this.heap[parent] > this.heap[index]) {
            this.swap(this.heap, parent, index);
            index = parent;
            parent = this.getParentIndex(index);
        }
    }

    swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp
    }

    /**
     * extract minimum, and put it in output
     */
    extract() {
        if (this.isEmpty()) {
            return undefined;
        }

        let removedItem = this.heap[0];
        this.heap[0] = this.heap.pop();

        this.siftDown(0);
        return removedItem;
    }

    siftDown(index) {


        let left = this.getleftIndex(index);
        let right = this.getRightIndex(index);
        let element = index;
        let minindex = undefined;

        if (this.hasLeftChild(index) && this.hasRightChild(index)) {
            minindex = this.getMin(left, right);

        } else if (this.hasRightChild(index)) {
            minindex = this.getMin(element, right);

        } else {
            minindex = this.getMin(left, element);

        }

        if (this.heap[element] > this.heap[minindex]) {
            this.swap(this.heap, element, minindex);
            this.siftDown(minindex);
        }

    }

    getMin(index1, index2) {
        return this.heap[index1] <= this.heap[index2] ? index1 : index2;
    }

    hasRightChild(index) {
        return this.heap.hasOwnProperty(
            this.getRightIndex(index)
        )
    }

    hasLeftChild(index) {
        return this.heap.hasOwnProperty(
            this.getleftIndex(index)
        )
    }

    isEmpty() {
        return this.heap.length === 0;
    }


}

let minHeap = new MinHeap();
minHeap.insert(5);
minHeap.insert(8);
minHeap.insert(4);
minHeap.insert(6);
console.log(minHeap.heap); // [ 4, 6, 5, 8 ]
console.log(minHeap.extract()); // 4
console.log(minHeap.extract()); // 5
console.log(minHeap.extract()); // 6
console.log(minHeap.extract()); // 8


