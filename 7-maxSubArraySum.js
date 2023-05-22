/*
    Write a function call maxSubArraySum which accepts
    an array of integers and a number calle n. The function 
    should calculate the maximun sum o n consecutive integers in the array.
*/ 

/************************
    Soluction 1
************************/

function maxSubArraySum(integersArr, n) {
    if (n > integersArr.length) { return null; }

    var max = -Infinity;
    for (let i=0; i < integersArr.length - (n+1); i++) {
        let temp = 0;

        for (let j=0; j<n; j++) {
            temp += integersArr[i+j];
        }

        if (temp > n) { max = temp; }
    }
    return max;
}

/************************
    Soluction 2
************************/

function maxSubArraySum2(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) { return null; }

    for (let i=0; i<num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i=num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log(maxSubArraySum2([1,2,5,2,8,1,5], 2)); // 10
console.log(maxSubArraySum2([1,2,5,2,8,1,5], 4)); // 17