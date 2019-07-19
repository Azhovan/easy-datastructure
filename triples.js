// Complete the countTriplets function below.
let used = [];
let outputBuffer = [];
let permutations = [];
let candidates = [];

function countTriplets(arr, r) {
    candidates = arr;
    permutes();

    let result = [];
    for (let i in permutations) {
        let triples = permutations[i].split(',');
        if (
            (triples[0] < triples[1] && triples[1] < triples[2])
        ) {

            result.push(triples);
        }
    }

    return result;
}

function permutes() {
    if (3 === outputBuffer.length) {
        permutations.push(outputBuffer.join(','));
        return;
    }

    for (let i = 0; i < candidates.length; ++i) {
        if (used[i]) {
            continue;
        } else {
            used[i] = true;
           outputBuffer.push(candidates[i]);
            permutes();
            used[i] = false;
           outputBuffer.pop();
        }
    }
}

ss = [1, 3, 9, 9, 27, 81]; // 1 3 9 9 27 81
x = countTriplets(ss, 3)
 console.log(x);

// nPr = (n!)/(n-r)!
// nCr = (n)!/(n-r)!*r!