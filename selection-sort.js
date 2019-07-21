// assume the first element of the array is small
// compare it with all the other element, to find the smaller than it
// insert it in new array


function selection_sort(arr, start =0) {

    // the last element, is biggest element
    if (start >= arr.length - 1) return;

    let smallest = arr[start];
    let i = start;

    while (i <= arr.length - 1) {
        if (arr.hasOwnProperty(i)) {
            if (arr[i] < smallest) {
                let temp = arr[i];
                arr[i] = arr[start];
                arr[start] = temp;
            }
        }

        i++;
    }

    selection_sort(arr, start+1);

    return arr;
}


const result = selection_sort([2, 3, 6, 5, 1, 9, 8, 7, 10]);
console.log(result);
