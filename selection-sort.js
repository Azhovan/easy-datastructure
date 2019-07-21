// assume the first element of the array is small
// compare it with all the other element, to find the smaller than it
// insert it in new array


function selection_sort(arr, start = 0) {

    // the last element, is biggest element
    if (start >= arr.length - 1) return;

    let smallest = arr[start];
    let i = start;

    while (i <= arr.length - 1) {

        if (arr[i] < smallest) {
            let temp = smallest = arr[i];

            arr[i] = arr[start];
            arr[start] = temp;
        }


        i++;
    }

    selection_sort(arr, start + 1);

    return arr;
}


const result1 = selection_sort([10, 7, 12, 8, 3, 2, 6]);
console.log(result1);

const result2 = selection_sort([2, 4, 10, 3, 9, 7, 8]);
console.log(result2);
