'use strict';
let arr = [];
// let arr  = [2, 3, 4, 2, 3, 6, 8, 4, 5];


// Complete the activityNotifications function below.
let sorted = [];
let tobeRemoved = null;

function activityNotifications(expenditure, d) {

    if (expenditure.length <= d) {
        return 0;
    }

    sorted = makeBaseSortedList(expenditure.slice(0, d));

    // start from day after d
    let count = 0;
    for (let i = d; i <= expenditure.length - 1; i++) {
        let which = expenditure[i];

        let increaseCount = calculateMedian(expenditure[i - d], which);

        if (increaseCount) {
            count++;
            console.log(count);
        }
    }

    return count;
}

function makeBaseSortedList(arr, which) {
    return quick_sort(arr, 0, arr.length - 1);
}


function median(which) {

    let length = sorted.length;

    if (length % 2 === 0) {
        let m = (length / 2);
        return which >= (sorted[m] + sorted[m - 1]);
    }

    let m = Math.floor(length / 2);
    return which >= 2 * sorted[m];

}

function calculateMedian(tobeRemoved, which) {

    let med = median(sorted, which);

    sorted.splice(sorted.indexOf(tobeRemoved), 1);
    // add new element to sorted array
    // insertion sort O(n)
    sorted[sorted.length] = which;

    for (let i = sorted.length - 1; i > 0; i--) {
        if (sorted[i - 1] > sorted[i]) {
            let temp = sorted[i - 1];
            sorted[i - 1] = sorted[i];
            sorted[i] = temp;
        } else {
            break;
        }

    }
    return med;
}


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

    let temp = arr[i];
    arr[i] = arr[pivot];
    arr[pivot] = temp;

    return i;
}

function quick_sort(arr, start, end) {

    if (end - start < 1) {
        return;
    }

    let index = partition(arr, start, end);

    quick_sort(arr, start, index - 1);
    quick_sort(arr, index + 1, end);

    return arr;

}

var fs = require('fs'),
    path = require('path'),
    filePath = path.join(__dirname, 'numbers_with_comma.txt');

fs.readFile(filePath, {encoding: 'utf-8'}, function (err, data) {
    if (!err) {
        arr = data.split(',');
        console.log(
            activityNotifications(arr, 40001)
        );

    } else {
        console.log(err);
    }
});
//let arr = [210, 20, 30, 40, 50, 10]; //2 3 4 2 3 6 8 4 5


