// does not support fload/ double

// find tha max length of the numbers,
// loop over all elements in list
// categorisze them based on most left digits.

function maxLength(arr) {
    let max = arr[0].length;

    arr.forEach(function (element, index) {
        let length = element.toString().length;
        max = max > length ? max : length;
    });

    return max;
}


function radix_sort(arr) {

    let maxloop = maxLength(arr);
    let sortedArray = [];

    for (let i = 0; i < max; i++) {

        arr.forEach(function (element, index) {

            let slice = '';

            if (element.isArray()) {
                for (let k = o; k < element.length; k++) {
                    slice = element[k].toString().slice(
                        element[k].toString().length - i - 1,
                        element[k].toString().length - i
                    );

                    sortedArray[slice] = [element[k]];
                }

            } else {
                slice = element.toString().slice(
                    element.toString().length - i - 1,
                    element.toString().length - i
                );
            }

        });

        arr = [...sortedArray];


    }
}