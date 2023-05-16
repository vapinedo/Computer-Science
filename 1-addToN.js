/************************
    Soluction 1
************************/

// function addUpToN(n) {
//     let total = 0;
//     for (let i=1; i <= n; i++) {
//         total += i;
//     }
//     return total;
// }

// let nineZero = 1000000000;

// let t0 = performance.now();
// addUpToN(nineZero);
// let t1 = performance.now();

// console.log(`Time elapsed: ${(t1 - t0) / 1000} seconds.`);


/************************
    Soluction 2
************************/

function addUpToN(n) {
    return n * (n+1) / 2;
}

let nineZero = 1000000000;

let t0 = performance.now();
addUpToN(nineZero);
let t1 = performance.now();

console.log(`Time elapsed: ${(t1 - t0) / 1000} seconds.`);