/*
    Write a function called sumZero which accept a sorted array of integers.
    The function should find the first pair of values where the sum is zero.

    Return an array that includes both values that sum to zero or undefined
    if a pair does no exist.
*/ 

/************************
    Soluction 1
************************/

function sumZero(sortedArray) {
    for (let i=0; i<sortedArray.length; i++) {
        for (let j=i+1; j<sortedArray.length; j++) {
            if (sortedArray[i] +  sortedArray[j] === 0) { 
                return [sortedArray[i], sortedArray[j]]; 
            }
        }
    }
}

// console.log(sumZero([-3,-2,-1,0,1,2]));
// console.log(sumZero([-2,0,1,3]));
// console.log(sumZero([1,2,3]));

/************************
    Soluction 2
************************/

function sumZero2(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];

        if (sum === 0) {
            return [arr[left], arr[right]];
        }
        else if (sum > 0) {
            right--;
        }
        else {
            left++;
        }
    }
}

console.log(sumZero2([-3,-2,-1,0,1,2]));
console.log(sumZero2([-2,0,1,3]));
console.log(sumZero2([1,2,3]));