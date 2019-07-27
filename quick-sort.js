function partition(arr, start, end) {

    let i = start;
    let j = start;
    let pivot = end;

    while (j < pivot) {
        if (arr[j] < arr[pivot]) {

            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;

        }
        j++;
    }

    // swap the last item bigger than pivot with pivot
    let temp = arr[i];
    arr[i] = arr[pivot];
    arr[pivot] = temp;

    out = arr;

    return i;
}


function quicksort(arr, start, end) {
    if (end - start < 1) {
        return;
    }

    let index = partition(arr, start, end);

    quicksort(arr, start, index - 1);
    quicksort(arr, index + 1, end);
}

let out = [];

let arr = [2, 4, 10, 3, 9, 7, 8];
quicksort(arr, 0, arr.length - 1);
console.log(out);

out = [];
arr = [10, 7, 12, 8, 3, 2, 6];
quicksort(arr, 0, arr.length - 1);
console.log(out);


out = [];
arr = [1,2,3,4,5,6,7];
quicksort(arr, 0, arr.length - 1);
console.log(out);
