function insertion_sort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let value = arr[i];
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > value) {
                arr[j+1] = arr[j];
                arr[j] = value;
            } else {
                break; // this will make it O(n), otherwise it will be O(n^2)
            }
        }
    }

    return arr;

}


const result1 = insertion_sort([10, 7, 12, 8, 3, 2, 6, 0]);
console.log(result1);

const result2 = insertion_sort([2, 4, 10, 1, 3, 9, 11, 8]);
console.log(result2);