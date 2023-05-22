/*
  Implment a function called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. There can be negative number in the array,
    but it will always be sorted.
*/ 

/************************
    Soluction 1
************************/

function countUniqueValues(arr) {
    let left = 0;
    let right = left + 1;

    if (arr.length > 0) {
        while (right < arr.length) {
            if (arr[left] === arr[right]) {
                right++;
            } 
            else {
                left++;
                arr[left] = arr[right];
            }
        }
    } else {
        return 0;
    }
    return left + 1;
}

console.log(countUniqueValues([1,1,1,1,1,2])); // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2,-1,-1,0,1])); // 4