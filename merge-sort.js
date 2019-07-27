

function simpleSort(data) {

    if (data.length < 2) {
        return;
    }

    let mid = Math.floor(data.length / 2);
    let left = [...data].slice(0, mid);
    let right = [...data].slice(mid);


    simpleSort(left);
    simpleSort(right);

    //merge it
     merge(data, left, right);

     return  data;
}

function merge(data, left, right) {


    let leftpointer = 0;
    let rightpointer = 0;
    let i = 0;

    while (leftpointer < left.length && rightpointer < right.length) {
        if (left[leftpointer] < right[rightpointer]) {
            data[i] = left[leftpointer];
            leftpointer++;
            i++;
        } else {
            data[i] = right[rightpointer];
            rightpointer++;
            i++;
        }
    }

    // copy the rest
    while (leftpointer < left.length) {
        data[i] = left[leftpointer];
        leftpointer++;
        i++;
    }

    // copy the rest
    while (rightpointer < right.length) {
        data[i] = right[rightpointer];
        i++;
        rightpointer++
    }

}

let sets = [11, 4, 0, 1, 6, 9, 5, 2, 3];
let x = simpleSort(sets);
console.log(x );