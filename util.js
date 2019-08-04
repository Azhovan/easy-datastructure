function arraySlice(arr, start = 0, end = arr.length) {

    let result = [];
    for (let i = start; i < end; i++) {
        result.push(
            arr[i]
        )
    }

    return result;
}

let result = arraySlice([1,2,3,4]);
console.log(result);
