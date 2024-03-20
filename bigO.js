// big o concepts

// let's write a selection sort

let list = [1,4,5,2,7,0,3]

// an in-place sorting algorithm
function SelectionSort(arr) {
    // look for smallest num in list
    // swap with i
    // iterate i++ for arr.length
    for (let i = 0; i < arr.length; i++ ) {
        // find smallest value
        let smallest = Math.min(...arr);
        // swap with index
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                i = j;
            }
        }
    }
    return arr
}

console.log(SelectionSort(list));

// the major takeaway here is that everything has to be touched twice
// that is what makes this function O of n squared
