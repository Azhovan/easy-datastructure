'use strict';


// Complete the checkMagazine function below.
var hashList = [];

function checkMagazine(magazine, note) {
    size = magazine.length;

    magazine = magazine.split(' ');
    note = note.split(' ');

    creatHashTable(magazine);
    let result = search(note);
    console.log(result);
}

// create hash table
// loop over items, create hash for every one
// fill the hash table
var hashListArray = [];
var size = 0;

function creatHashTable(magazine) {
    for (let i in magazine) {
        let hash = createHash(magazine[i]);
        add(hash, magazine[i]);
    }
}

function createHash(input) {
    let hashcode = 0;
    for (let i in input) {
        let ascii = input.charCodeAt(i);
        hashcode += ascii;
    }
    return hashcode % size;
}

function add(hashcode, item) {
    if (hashList.hasOwnProperty(hashcode)) {
        let previous = hashList[hashcode];
        previous.push(item);
        hashList[hashcode] = previous;
    } else {
        hashList[hashcode] = [item];
    }
}

function search(notes) {
    let hashcode = 0;
    for (let i in notes) {
        let hashItem = createHash(notes[i]);

        if (!hashList.hasOwnProperty(hashItem)) {
            return "No";
        }

        let found = true;
        let result = hashList[hashItem];
        if (result.indexOf(notes[i]) === -1) {
            return "No";
        }

        let index = result.indexOf(notes[i]);
        result[index] = '';
        hashList[hashItem] = result;

    }

    return "Yes";

}


// ------ call the function -----------------
checkMagazine(
    "two times two is not four",
    "two times two is four"
);
