let source = 'this is greate';
let toRemove = 'tis';
let lookupArray = [];
let cleanedArray = [];

/**
 * create a lookup array
 */
function createLookupArray() {
    for (let i in toRemove) {
        lookupArray[toRemove[i]] = true;
    }
}

/**
 * return string without remove candidates
 * @returns {string}
 */
function findAndDelete() {
    createLookupArray();

    for (let i in source) {
        if (!lookupArray[source[i]]) {
            cleanedArray.push(source[i]);
        }
    }

    return cleanedArray.join('');
}

console.log(findAndDelete());