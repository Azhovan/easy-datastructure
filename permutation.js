// works for string as input
function permuteStrings() {

    if (str.length === output.length) {
        console.log(output);
        return;
    }

    for (let i = 0; i < str.length; ++i) {
        if (used[i])
            continue;

        else {
            used[i] = true;
            output = output.concat(str[i]);
            permuteStrings();
            used[i] = false;
            output = output.slice(0, -1);
        }
    }
}

var used = [];
var str = [1, 2, 3];
var output = []; // var output = '';
var permutations= [];

permuteStrings();
console.log(permutations);