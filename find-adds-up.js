// problem: Given the array arr, find and return two indices of the array that add up to weight or return -1 if there is no combination that adds up to weight.
// find two indices in array that adds up to <number>
// [1,2,3,4,5]; // <9>


// solution
// 1. create a hash-map from <number> - array[element]
// 2. loop over the original array, check if there is complementary in hashmap or not


let arr = [1, 2, 3, 4, 5, 8];
let hashmap = {};

arr.forEach(function (element, index) {
    hashmap[9 - element] = true;
    hashmap[element] = false;
});

for (let elm of arr) {
    if (hashmap[9 - elm] && !hashmap[elm]) {
        console.log([elm, 9 - elm]);
    }
}
