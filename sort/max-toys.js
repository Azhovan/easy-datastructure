'use strict';

// Complete the maximumToys function below.
// i wanna use insertion sort, but since looks dataset is limited and small (of course seller does not have 10000 toys!) any other algorithms can be used

function maximumToys(prices, k) {
// sort the price list
    let j = 0;
    while (j <= prices.length - 1) {
        let which = prices[j];

        for (let i = j; i >= 0; i--){
            if (prices[i] > which) {
                prices[i + 1] = prices[i];
                prices[i] = which;
            }
        }
        j++;
    }

    // max the selection
    let sum = 0
    let count = 0;
    for (let i = 0; i <= prices.length-1; i++){
        sum += prices[i];
        if (sum <= k) {
            count++;
        }
        else {
            break;
        }
    }

    return count;

}

console.log(
    maximumToys([1, 12, 5, 111, 200, 1000, 10], 7)
);