function mergeKLists(lists) {


    let merged = [];

    if (lists.length === 1)
        return lists;

    for (let i = 0; i <= lists.length - 1; i++) {
        merged = mergeSortedLists(merged, lists[i]);
    }

    return merged;

}


function mergeSortedLists(list1, list2) {
    let merged = [];
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            merged.push(list1[i]);
            i++;

        } else {
            merged.push(list2[j]);
            j++;
        }
    }

    while (i < list1.length) {
        merged.push(list1[i]);
        i++;
    }

    while (j < list2.length) {
        merged.push(list2[j]);
        j++
    }

    merged.concat(list1);
    merged.concat(list2);

    return merged;
}

//$result = mergeKLists([[],[-1,5,11],[],[6,10]]);
//$result = mergeKLists([[1,4,5],[1,3,4],[2,6]]);
//$result = mergeKLists([[],[]]);

console.log($result);
