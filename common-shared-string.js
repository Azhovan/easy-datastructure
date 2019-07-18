
// Complete the twoStrings function below.
let s1LookupTable = [];

function twoStrings(s1, s2) {
    // loop over s1 to create lookup table
    for (let i in s1) {
        let hashCode = s1.charCodeAt(i);
        s1LookupTable[hashCode] = true;
    }


    // loop over s2 and check lookup table
    for (let i in s2) {
        let hashCode = s2.charCodeAt(i);
        if (s1LookupTable.hasOwnProperty(hashCode)) {
            console.log('Yes');
            return;
        }

    }

    console.log('No');
    return;


}

twoStrings('world', 'hi')