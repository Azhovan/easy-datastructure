
// FIND COMMON ELEMENTS IN K-SORTED ARRAYS

// solution
// make a hash-map from the first array in the list <commonList>
// loop over all other arrays and comparing the commonList with next item


function commonElement(lists) {

    let commonList = [];

    // make hash map for list[0]
    for (let item of lists[0]) {
        commonList[item] = item;
    }

    for (let i = 1; i < lists.length; i++) {
        commonList = findCommons(commonList, lists[i]);
    }

    return commonList.filter(function(element){
        return element !== '';
    })
}

function findCommons(arr1, arr2) {
    // suppose that first arr1 is an hash-map
    // loop the arr2 and find the commons
    let commons = [] ;
    for (let item of arr2) {
        if(arr1[item]){
            commons[item] = item;
        }
    }

    return commons;
}


console.log(
    commonElement([
        [1, 5, 5, 10],
        [3, 4, 5, 5, 10],
        [5, 5, 10, 20],
        [5, 10]
    ])
);
