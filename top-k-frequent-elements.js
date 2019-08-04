/*
    Top K Frequent Elements
    Medium

    Given a non-empty array of integers, return the k most frequent elements.

        Example 1:

            Input: nums = [1,1,1,2,2,3], k = 2
            Output: [1,2]

       Example 2:

            Input: nums = [1], k = 1
            Output: [1]

    Note:
        You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
        Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let dict = {};
    let results = [];

    for (let num of nums) {
        dict[num] = dict[num] + 1 || 1;
    }

    console.log(dict);

    let sorted = Object.entries(dict).sort((a, b) => {
        return b[1] - a[1];
    });

    for(let i = 0; i < k; i++) {
        results.push(Number(sorted[i][0]));
    }
    return results;

};

let result = topKFrequent([-1,-1,2,2], 1); // [1,2]
//let result = topKFrequent([4, 5, 5, 5, 2, 8, 8], 2); // [1,2]
console.log(result);
